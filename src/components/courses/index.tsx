"use client";
import {
  Affix,
  Button,
  Col,
  Collapse,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Layout,
  Row,
  Segmented,
  Select,
  Space,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import TopBanner from "./catalog/top-banner";
import { CaretRightOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { COURSE_TYPES } from "./define";
import Testimony from "../home/Testimony";
import ClassCard from "../common/class-card";
import {
  useGetCourseLevelType,
  useGetCourses,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { SegmentedValue } from "antd/es/segmented";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { GetCourses } from "@/apis/strapi-client/define";
import type { Dayjs } from 'dayjs';
import isBetween from "dayjs/plugin/isBetween";
import dayjs from 'dayjs';


const { Panel } = Collapse;
const { Content } = Layout;
const { RangePicker } = DatePicker;

interface FormatCoursesProps {
  primaryTitle: string;
  children:
  | {
    secondaryTitle: string;
    children: StrapiResponseDataItem<GetCourses>[] | undefined;
  }[]
  | undefined;
}
const Courses = () => {
  const pathname = usePathname();
  const { format: t, lang } = useLang();
  const [form] = Form.useForm();
  const { hash } = window.location;
  const segmentedDom = useRef<HTMLDivElement>(null);
  const [segmented, setSegmented] = useState<SegmentedValue>("Online Classes");
  const { data: courseLevelType } = useGetCourseLevelType();
  const { data: courses } = useGetCourses({});
  const [currentData, setCurrentData] = useState<FormatCoursesProps[]>();
  const [copyCurrentData, setCopyCurrentData] = useState<FormatCoursesProps[]>();


  dayjs.extend(isBetween);
  // 获取非空数据
  const getLangResult = (
    lang: "zh" | "en",
    zhData: string[],
    enData: string[]
  ) => {
    if (zhData === null && enData === null) {
      return [];
    } else {
      if (lang === "zh") {
        return zhData ? zhData : enData;
      } else {
        return enData ? enData : zhData;
      }
    }
  };

  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony({
    ready: true,
    pageName: [pathname],
  });
  // 获取所有的courseLevelType分类
  const courseLevelTypeData = courseLevelType?.map(
    (item) => item?.attributes?.type
  );

  // 筛选类别的options
  const categoryOptions = courseLevelTypeData?.map(item => {
    return {
      label: item,
      value: item
    }
  });

  // 根据online in person isCamp划分
  const getOnlineInPersonIsCamp = (type: string) => {
    switch (type) {
      case "Online Classes":
        return courses?.data?.filter(
          (item) => item?.attributes?.classMode === "Online Live"
        );
      case "In-person Classes":
        return courses?.data?.filter(
          (item) => item?.attributes?.classMode === "In-person"
        );
      case "is Camp":
        return courses?.data?.filter((item) => item?.attributes?.isCamp);
      default:
        return courses?.data;
    }
  };

  const generateCourses = (
    courseType: string,
    primaryData: string[] | undefined
  ) => {
    const filteredCourses = getOnlineInPersonIsCamp(courseType);
    return {
      primaryTitle: courseType,
      children: primaryData?.map((levelType) => {
        return {
          secondaryTitle: levelType,
          children: filteredCourses?.filter(
            // 根据第一次分类过滤的courses或者原始的课程直接进行二层过滤
            (filteredCourse) =>
              filteredCourse?.attributes?.courseLevelType?.data?.attributes
                ?.type === levelType
          ),
        };
      }),
    };
  };

  // 固定所有的数据
  const allCourses = COURSE_TYPES.map((courseType, index) => {
    if (index < 3) {
      return generateCourses(courseType, courseLevelTypeData);
    } else {
      return generateCourses(courseType, [courseType]);
    }
  });

  // 移除二级课程为空的数据
  const removeEmptyChildren = (data: FormatCoursesProps[]) => {
    if (data) {
      return [{
        primaryTitle: data[0]?.primaryTitle,
        children: data[0]?.children?.filter(item => item?.children?.length !== 0)
      }];
    }
  }
  // 根据segmented来筛选课程数据
  const getCourseBySegmented = (segmented: SegmentedValue) => {
    const segmentedData = allCourses?.filter(
      (item) => item?.primaryTitle === segmented
    );
    const result = removeEmptyChildren(segmentedData);

    setCurrentData(result);
    setCopyCurrentData(result);
  };

  const onSegmentedChange = (value: SegmentedValue) => {
    history.replaceState(null, "", pathname);
    form.resetFields();
    setSegmented(value);
  };
  useEffect(() => {
    getCourseBySegmented(segmented);
  }, [segmented, courses, courseLevelType]);

  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  // 监听hash
  useEffect(() => {
    if (hash === "#apcs") {
      setSegmented("APCS Classes");
    } else {
      scrollIntoView(hash);
    }
  }, [hash, currentData]);



  const onFinish = (values: { category: string, rangeDate: [Dayjs, Dayjs], search: string }) => {
    const { category, rangeDate, search } = values;
    let result;
    if (!category && !rangeDate && !search) {
      result = copyCurrentData;
    }
    if (copyCurrentData) {
      const primaryData = copyCurrentData[0];
      if (category && rangeDate && search) {
        const [start, end] = rangeDate;
        const startRangeDate = dayjs(start);
        const endRangeDate = dayjs(end);

        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.filter(item => item?.secondaryTitle === category).map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => {
              const { classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn } = course?.attributes;
              return dayjs(course?.attributes?.startDate)?.isBetween(startRangeDate, endRangeDate) &&
                dayjs(course?.attributes?.endDate)?.isBetween(startRangeDate, endRangeDate) &&
                [classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn].some(field => field?.includes(search));
            }
            )
          }))
        }];
      } else if (category && rangeDate) {
        const [start, end] = rangeDate;
        const startRangeDate = dayjs(start);
        const endRangeDate = dayjs(end);

        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.filter(item => item?.secondaryTitle === category).map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course =>
              dayjs(course?.attributes?.startDate)?.isBetween(startRangeDate, endRangeDate) &&
              dayjs(course?.attributes?.endDate)?.isBetween(startRangeDate, endRangeDate)
            )
          }))
        }];
      } else if (category && search) {
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.filter(item => item?.secondaryTitle === category).map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => {
              const { classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn } = course?.attributes;
              return [classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn].some(field => field?.includes(search));
            }
            )
          }))
        }];
      } else if (rangeDate && search) {
        const [start, end] = rangeDate;
        const startRangeDate = dayjs(start);
        const endRangeDate = dayjs(end);

        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => {
              const { classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn } = course?.attributes;
              return dayjs(course?.attributes?.startDate)?.isBetween(startRangeDate, endRangeDate) &&
                dayjs(course?.attributes?.endDate)?.isBetween(startRangeDate, endRangeDate) &&
                [classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn].some(field => field?.includes(search));
            }
            )
          }))
        }];
      } else if (category) {
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.filter(item => item?.secondaryTitle === category)
        }];
      } else if (rangeDate) {
        const [start, end] = rangeDate;
        const startRangeDate = dayjs(start);
        const endRangeDate = dayjs(end);

        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course =>
              dayjs(course?.attributes?.startDate)?.isBetween(startRangeDate, endRangeDate) &&
              dayjs(course?.attributes?.endDate)?.isBetween(startRangeDate, endRangeDate)
            )
          }))
        }];
      } else if (search) {
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => {
              const { classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn } = course?.attributes;
              return [classLang, classMode, classRoomLang, courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, courseLongDescriptionZh, courseLongDescriptionEn].some(field => field?.includes(search));
            }
            )
          }))
        }];
      }
    }
    const filteredResult = removeEmptyChildren(result as FormatCoursesProps[]);
    setCurrentData(filteredResult);
  }


  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.courses}>
        <Content>
          <TopBanner />

          <div className={`${styles.classContainer} container`}>
            <Affix
              offsetTop={100}
              onChange={(isAffix) => {
                if (isAffix && segmentedDom.current) {
                  segmentedDom.current.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.2)";
                } else if (segmentedDom.current) {
                  segmentedDom.current.style.boxShadow = "initial";
                }
              }}
            >
              <Segmented
                ref={segmentedDom}
                style={{ backgroundColor: "#fff" }}
                block
                value={segmented}
                options={COURSE_TYPES}
                onChange={onSegmentedChange}
              />
            </Affix>

            <Form layout="inline" form={form} className={styles.form} onFinish={onFinish}>
              <Row gutter={[16, 8]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 7 }}>
                  <Form.Item name="category">
                    <Select
                      style={{ width: 240 }}
                      placeholder={"Category"}
                      options={categoryOptions}
                      allowClear={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
                  <Form.Item name="rangeDate">
                    <RangePicker />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 7 }}>
                  <Form.Item name="search">
                    <Input
                      suffix={<SearchOutlined style={{ color: "#d9d9d9" }} />}
                      allowClear={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 2 }}>
                  <Form.Item>
                    <Button type={"primary"} className={styles.button} htmlType="submit">
                      {t('Search')}
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>

            {currentData?.map((item, index) => {
              return (
                <div className={"classify"} key={item?.primaryTitle}>
                  <Collapse
                    defaultActiveKey={"classifyCollapse" + index}
                    ghost
                    expandIconPosition={"end"}
                    expandIcon={({ isActive }) => (
                      <div className={styles.changeBtn}>
                        <DownOutlined
                          rotate={isActive ? 180 : 0}
                          className={styles.icon}
                        />
                      </div>
                    )}
                  >
                    <Panel
                      key={"classifyCollapse" + index}
                      header={
                        <div className={styles.title}>{item?.primaryTitle}</div>
                      }
                    >
                      <>
                        {item?.children?.map((v, j) => {
                          return (
                            <div key={v?.secondaryTitle} id={"#classify" + j}>
                              <Collapse
                                defaultActiveKey={v?.secondaryTitle}
                                ghost
                                style={{ marginBottom: 30 }}
                                expandIcon={({ isActive }) => (
                                  <CaretRightOutlined
                                    rotate={isActive ? 90 : 0}
                                  />
                                )}
                              >
                                <Panel
                                  key={v?.secondaryTitle}
                                  header={
                                    <div className={styles.paneBox}>
                                      <div className={styles.panelTitle}>
                                        {v?.secondaryTitle}
                                      </div>
                                      <span className={styles.courseNum}>
                                        {v?.children?.length} courses
                                      </span>
                                    </div>
                                  }
                                >
                                  <Space
                                    size={27}
                                    style={{ width: "100%", flexWrap: "wrap" }}
                                  >
                                    {v?.children?.map((g, index) => {
                                      return (
                                        <ClassCard
                                          key={g?.id}
                                          border={"bottom"}
                                          index={index}
                                          animate={false}
                                          title={`${g?.attributes?.courseCode
                                            }: ${getTransResult(
                                              lang,
                                              g?.attributes?.courseTitleZh,
                                              g?.attributes?.courseTitleEn
                                            )}`}
                                          list={getLangResult(
                                            lang,
                                            g?.attributes
                                              ?.courseShortDescriptionZh,
                                            g?.attributes
                                              ?.courseShortDescriptionEn
                                          )}
                                          time={`${g.attributes?.lessonNum} ${g?.attributes?.frequency ===
                                            "Weekly"
                                            ? "weeks"
                                            : "days"
                                            }`}
                                          href={`/courses/detail/${g?.id}`}
                                        />
                                      );
                                    })}
                                  </Space>
                                </Panel>
                              </Collapse>
                            </div>
                          );
                        })}
                      </>
                    </Panel>
                  </Collapse>
                </div>
              );
            })}
          </div>
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Courses;
