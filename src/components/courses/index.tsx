"use client";
import {
  Affix,
  Button,
  Col,
  Collapse,
  ConfigProvider,
  DatePicker,
  Input,
  Layout,
  Row,
  Segmented,
  Select,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import TopBanner from "./catalog/top-banner";
import { CaretRightOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
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
import FilterForm from "./FilterForm";
import type { Dayjs } from 'dayjs';
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
  const { hash } = window.location;
  const segmentedDom = useRef<HTMLDivElement>(null);
  const [segmented, setSegmented] = useState<SegmentedValue>("Online Classes");
  const [currentData, setCurrentData] = useState<FormatCoursesProps[]>();
  const [copyCurrentData, setCopyCurrentData] = useState<FormatCoursesProps[]>();
  const { data: courseLevelType } = useGetCourseLevelType();
  const { data: courses, runAsync } = useGetCourses({});


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

  const allCourses = COURSE_TYPES.map((courseType, index) => {
    if (index < 3) {
      return generateCourses(courseType, courseLevelTypeData);
    } else {
      return generateCourses(courseType, [courseType]);
    }
  });

  const getCourseBySegmented = (segmented: SegmentedValue) => {
    const result = allCourses?.filter(
      (item) => item?.primaryTitle === segmented
    );
    setCurrentData(result);
    setCopyCurrentData(result);
  };
  const onSegmentedChange = (value: SegmentedValue) => {
    history.replaceState(null, "", pathname);
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



  const getCurrentData = () => {

  }

  // 根据自动获取生成的数据来筛选


  // useEffect(() => {
  //   runAsync({
  //     populate: "*",
  //     sort: ["order:desc"],
  //     filters: { ...filters },
  //     pagination: { ...pagination },
  //   });
  // }, [pagination, filters]);



  const categoryOptions = courseLevelTypeData?.map(item => {
    return {
      label: item,
      value: item
    }
  });
  categoryOptions?.unshift({ label: "Category", value: "Category" });


  const onCategoryChange = (value: string) => {
    console.log(copyCurrentData);
    if (copyCurrentData && value !== "Category") {
      const categorizedCurrentData = copyCurrentData[0]?.children?.filter(item => item?.secondaryTitle === value);
      const newCategorizedCurrentData = {
        primaryTitle: copyCurrentData[0]?.primaryTitle,
        children: categorizedCurrentData
      }
      console.log(newCategorizedCurrentData);
      setCurrentData([newCategorizedCurrentData]);
    } else if (copyCurrentData && value === "Category") {
      setCurrentData(copyCurrentData);
    }
  }



  const isDataInRange = (start: Dayjs, end: Dayjs, dataStart: Dayjs, dataEnd: Dayjs) => {
    if (dataStart && dataEnd) {
      return dataStart?.isBetween(start, end) && dataEnd?.isBetween(start, end);
    }
    return false;
  }

  useEffect(() => {

  }, [])
  const onRangePickerChange = (_: any, dateStrings: [string, string]) => {
    const startTime = dayjs(dateStrings[0]);
    const endTime = dayjs(dateStrings[1]);
    runAsync({
      populate: "*",
      sort: ['order:desc'],
      filters: {
        startDate: {
          $between: String(startTime)
        },
        endDate: {
          $between: String(endTime)
        }
      }
    });

    console.log(currentData);


    // const filteredCourses = currentData && currentData[0]?.children?.filter(primary => {
    //   return primary?.children?.filter(secondary => {
    //     const dataStart = dayjs(secondary?.attributes?.startDate);
    //     const dataEnd = dayjs(secondary?.attributes?.endDate);

    //     if (dataStart && dataEnd) {
    //       return isDataInRange(dayjs(startTime), dayjs(endTime), dataStart, dataEnd);
    //     }
    //     return false;
    //   });

    // });
    // 其他处理逻辑...
  }



  const onSearch = (value: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(value);
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

            <Row justify="end" className={styles.row}>
              <Col xs={24} sm={24} md={4}>
                <Select
                  style={{ width: '100%' }}
                  placeholder={"Category"}
                  options={categoryOptions}
                  onChange={onCategoryChange}
                />
              </Col>

              <Col xs={24} sm={24} md={{ span: 4, offset: 1 }}>
                <RangePicker onChange={onRangePickerChange} />
              </Col>

              <Col xs={24} sm={24} md={{ span: 6, offset: 1 }}>
                <Space>
                  <Input
                    onPressEnter={onSearch}
                    suffix={<SearchOutlined style={{ color: "#d9d9d9" }} />}
                  />
                  <Button
                    type={"primary"}
                    htmlType={"submit"}
                    className={styles.button}
                  >
                    {t("Search")}
                  </Button>
                </Space>
              </Col>
            </Row>
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
