'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Affix,
  Button,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Layout,
  Radio,
  RadioChangeEvent,
  Row,
  Segmented,
  Select,
  Space,
} from 'antd';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import type { Dayjs } from 'dayjs';
import { SegmentedValue } from 'antd/es/segmented';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult, scrollIntoView, getLangResult, getWeeksDays } from '@/utils/public';
import { useMobile } from '@/utils';
import Banner from './banner';
import ClassCard from '../common/class-card';
import Reviews from '@/components/common/reviews';
import { CourseMode, CourseTypes } from './define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import {
  useGetCourseLevelType,
  useGetCourses,
  useGetReviews,
} from '@/apis/strapi-client/strapi';
import { GetCourses } from '@/apis/strapi-client/define';
import styles from './index.module.scss';
import useDayJs from '@/hooks/useDayJs';

const { Panel } = Collapse;
const { Content } = Layout;
const { RangePicker } = DatePicker;

interface SegmentedCoursesProps {
  primaryTitle: string;
  children:
  | {
    secondaryTitle: string;
    children: StrapiResponseDataItem<GetCourses>[] | undefined;
  }[]
  | undefined;
}

const Courses: React.FC = () => {
  const { hash } = window.location;
  const pathname = usePathname();
  const [form] = Form.useForm();
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  const segmentedDom = useRef<HTMLDivElement>(null);
  const [segmented, setSegmented] = useState<SegmentedValue>('Online Classes');
  const [segmentedData, setSegmentedData] = useState<SegmentedCoursesProps[]>();
  const [copySegmentedData, setCopySegmentedData] = useState<SegmentedCoursesProps[]>();
  const { data: courseLevelType } = useGetCourseLevelType();
  const { data: courses } = useGetCourses({});
  const COURSE_TYPES = Object.values(CourseTypes);
  const BILINGUAL_ID = 81;

  const { dayjs } = useDayJs(lang);


  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
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
    };
  });

  /**
   * 第一次分类
   * 将所有的课程根据online或者in-person或者isCamp来划分三大类课程
   * @param type online/in-person/isCamp
   * @returns 返回online或者in-person或者camp的课程集合
   */
  const getOnlineInPersonIsCamp = (type: string) => {
    switch (type) {
      case CourseTypes.OnlineClasses:
        return courses?.data?.filter(
          (item) => item?.attributes?.classMode === CourseMode.OnlineLive
        );
      // case CourseTypes.InPersonClasses:
      //   return courses?.data?.filter(
      //     (item) => item?.attributes?.classMode === CourseMode.InPerson
      //   );
      case CourseTypes.CampsClasses:
        return courses?.data?.filter((item) => item?.attributes?.isCamp);
      default:
        return courses?.data;
    }
  };

  /**
   * 生成online或者in-person或者camps或者其他类别的所有一级二级课程数据
   * @param courseType 本地要展示在页面的一级分类
   * @param primaryData strapi上的二级分类
   * @returns 分类好的课程数据
   */
  const generateCourses = (
    courseType: string,
    primaryData: string[] | undefined
  ) => {
    const filteredCourses = getOnlineInPersonIsCamp(courseType);
    const sortFilteredCourses = filteredCourses?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
    return {
      primaryTitle: courseType,
      children: primaryData?.map((levelType) => {
        return {
          secondaryTitle: levelType,
          children: sortFilteredCourses?.filter(
            (filteredCourse) =>
              filteredCourse?.attributes?.courseLevelType?.data?.attributes
                ?.type === levelType
          ),
        };
      }),
    };
  };

  /**
   * online和in-person和camps的课程需要一级嵌套二级展示所有课程数据
   * 除了上面三个都是只展示二级课程数据
   */
  const allCourses = COURSE_TYPES?.map((courseType, index) => {
    if (index < 2) {
      return generateCourses(courseType, courseLevelTypeData);
    } else {
      return generateCourses(courseType, [courseType]);
    }
  });


  /**
   * 去除二级课程为空的数据
   * @param data 选中的segmented的课程数据
   * @returns 
   */
  const removeEmptyChildren = (data: SegmentedCoursesProps[]) => {
    if (data) {
      return [{
        primaryTitle: data[0]?.primaryTitle,
        children: data[0]?.children?.filter(item => item?.children?.length !== 0)
      }];
    }
  };

  /**
   * 根据segmented获取当前选中的课程数据
   * @param segmented 选中的segmented
   */
  const getCourseBySegmented = (segmented: SegmentedValue) => {
    const segmentedData = allCourses?.filter(
      (item) => item?.primaryTitle === segmented
    );

    const result = removeEmptyChildren(segmentedData);

    setSegmentedData(result);
    setCopySegmentedData(result);
  };

  /**
   * hash跳转，清空筛选的表单
   * @param value 选中的segmented
   */
  const onSegmentedChange = (value: SegmentedValue | RadioChangeEvent) => {
    history.replaceState(null, '', pathname);
    form.resetFields();
    setSegmented(typeof value === 'object' ? value.target.value : value);
  };

  useEffect(() => {
    getCourseBySegmented(segmented);
  }, [segmented, courses, courseLevelType]);

  /**
   * hash key要与nav跳转的href对应
   */
  const hashSegmentedMap = new Map([
    ['#online', CourseTypes.OnlineClasses],
    ['#camps', CourseTypes.CampsClasses],
    ['#mock-test-classes', CourseTypes.MockTestClasses],
    ['#apcs', CourseTypes.JavaAPCSClasses],
  ]);

  /**
   * 监听从link跳转过来的hash值
   */
  useEffect(() => {
    if (hashSegmentedMap.get(hash)) {
      const hashValue = hashSegmentedMap.get(hash);
      setSegmented(hashValue as SegmentedValue);
    } else {
      scrollIntoView(hash);
    }
  }, [hash, segmentedData]);


  /**
   * 判断输入的课程是否在对应的开始结束时间内
   * @param startDateTime 选择的开始时间
   * @param endDateTime 选择的结束时间
   * @param course 课程数据
   * @returns 
   */
  const searchDate = (startDateTime: Dayjs, endDateTime: Dayjs, course: StrapiResponseDataItem<GetCourses>) => {
    return dayjs(course?.attributes?.startDateTime)?.isBetween(startDateTime, endDateTime) &&
      dayjs(course?.attributes?.endDateTime)?.isBetween(startDateTime, endDateTime);
  };


  /**
   * 判断输入的课程是否包含输入的关键词
   * @param inputValue 输入的关键词
   * @param course 要匹配的课程
   * @returns 
   */
  const searchInput = (inputValue: string, course: StrapiResponseDataItem<GetCourses>) => {
    const {
      classLang,
      classMode,
      spokenLang,
      courseCode,
      courseTitleZh,
      courseTitleEn,
      courseShortDescriptionZh,
      courseShortDescriptionEn,
      courseLongDescriptionZh,
      courseLongDescriptionEn
    } = course?.attributes;

    const searchFields = [
      classLang,
      classMode,
      spokenLang,
      courseCode,
      courseTitleZh,
      courseTitleEn,
      courseShortDescriptionZh,
      courseShortDescriptionEn,
      courseLongDescriptionZh,
      courseLongDescriptionEn
    ];

    return searchFields?.some(field => {
      if (field) {
        return (field as string)?.toLowerCase()?.indexOf(inputValue?.toLowerCase()) > -1;
      }
    });
  };


  // 前端根据当前的segmentedData来筛选
  const onFinish = (values: { category: string, rangeDate: [Dayjs, Dayjs], search: string }) => {
    const { category, rangeDate, search } = values;
    let result;
    if (!category && !rangeDate && !search) {
      result = copySegmentedData;
    }
    if (copySegmentedData) {
      const primaryData = copySegmentedData[0];
      if (category && rangeDate && search) {
        const [start, end] = rangeDate;
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.filter(item => item?.secondaryTitle === category)?.map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => {
              return searchDate(dayjs(start), dayjs(end), course) && searchInput(search, course);
            }
            )
          }))
        }];
      } else if (category && rangeDate) {
        const [start, end] = rangeDate;
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.filter(item => item?.secondaryTitle === category).map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => searchDate(dayjs(start), dayjs(end), course))
          }))
        }];
      } else if (category && search) {
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.filter(item => item?.secondaryTitle === category).map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => searchInput(search, course))
          }))
        }];
      } else if (rangeDate && search) {
        const [start, end] = rangeDate;
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => {
              return searchDate(dayjs(start), dayjs(end), course) && searchInput(search, course);
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
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => searchDate(dayjs(start), dayjs(end), course))
          }))
        }];
      } else if (search) {
        result = [{
          primaryTitle: primaryData?.primaryTitle,
          children: primaryData?.children?.map(item => ({
            secondaryTitle: item?.secondaryTitle,
            children: item?.children?.filter(course => searchInput(search, course))
          }))
        }];
      }
    }
    const filteredResult = removeEmptyChildren(result as SegmentedCoursesProps[]);
    setSegmentedData(filteredResult);
  };

  return (
    <Layout className={styles.courses}>
      <Content>
        <Banner />

        <div className={`${styles.classContainer} container`}>
          <Affix
            offsetTop={100}
            onChange={(isAffix) => {
              if (isAffix && segmentedDom.current) {
                segmentedDom.current.style.boxShadow =
                  '0 2px 4px rgba(0, 0, 0, 0.2)';
              } else if (segmentedDom.current) {
                segmentedDom.current.style.boxShadow = 'initial';
              }
            }}
          >
            {
              isMobile ?
                <Radio.Group
                  optionType="button"
                  buttonStyle="solid"
                  onChange={onSegmentedChange}
                  value={segmented}
                  className={styles.radioGroup}
                >
                  <Space size={0} style={{ width: '100%' }} direction={isMobile ? 'vertical' : 'horizontal'}>
                    {
                      COURSE_TYPES?.map(courseType => (
                        <Radio style={{ width: '100%' }} key={courseType} value={courseType}>{courseType}</Radio>
                      ))
                    }
                  </Space>
                </Radio.Group>
                :
                <Segmented
                  ref={segmentedDom}
                  style={{ backgroundColor: '#fff' }}
                  block
                  value={segmented}
                  options={COURSE_TYPES}
                  onChange={onSegmentedChange}
                />
            }
          </Affix>

          <Form layout="inline" form={form} className={styles.form} onFinish={onFinish}>
            <Row gutter={[32, 8]}>
              <Col xs={24} sm={24} md={24} lg={{ span: 6, offset: 4 }}>
                <Form.Item name="category">
                  <Select
                    style={isMobile ? { width: '100%' } : { width: 216 }}
                    placeholder={'Category'}
                    options={categoryOptions}
                    allowClear
                  />
                </Form.Item>
              </Col>
              {
                !isMobile &&
                <Col xs={24} sm={24} md={24} lg={6}>
                  <Form.Item name="rangeDate" >
                    <RangePicker />
                  </Form.Item>
                </Col>
              }
              <Col xs={24} sm={24} md={24} lg={6}>
                <Form.Item name="search" >
                  <Input
                    suffix={<SearchOutlined style={{ color: '#d9d9d9' }} />}
                    allowClear
                    style={isMobile ? { width: '100%' } : {}}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={2}>
                <Form.Item>
                  <Button type={'primary'} className={styles.button} style={isMobile ? { width: '100%' } : {}} htmlType="submit">
                    {t('Search')}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>

          {segmentedData?.map(item => {
            return (
              <div key={item?.primaryTitle}>
                <div className={styles.title}>{item?.primaryTitle}</div>
                {item?.children?.map((v, j) => {
                  return (
                    <div key={v?.secondaryTitle} id={'#classify' + j}>
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
                            size={24}
                            style={{ width: '100%', flexWrap: 'wrap' }}
                          >
                            {v?.children?.map((g, index) => {
                              return (
                                <ClassCard
                                  key={g?.id}
                                  border={'bottom'}
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
                                  ) as string[]}
                                  time={`${g?.attributes?.lessonNum} ${getWeeksDays(g?.attributes?.frequency)}`}
                                  href={`/courses/${segmented === CourseTypes.CampsClasses ? 'camps' : 'detail'}/${g?.id}`}
                                  bilingual={g?.id === BILINGUAL_ID}
                                />
                              );
                            })}
                          </Space>
                        </Panel>
                      </Collapse>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Courses;
