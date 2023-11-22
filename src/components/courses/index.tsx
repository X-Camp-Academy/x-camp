'use client';
import { ClassMode, GetCourses } from '@/apis/strapi-client/define';
import { useGetCourses, useGetReviews } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import Reviews from '@/components/common/reviews';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getLangResult, getTransResult, getWeeksDays, scrollIntoView } from '@/utils/public';
import { CaretRightOutlined } from '@ant-design/icons';
import { Affix, Button, Collapse, Form, Layout, RadioChangeEvent, Select, Space } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ClassCard from '../common/class-card';
import SegmentedRadioGroup, { useEventOptions } from '../common/segmented-radio-group';
import Banner from './banner';
import { CourseTypes } from './define';
import styles from './index.module.scss';
import { useCourseOptions } from './public';

const { Panel } = Collapse;
const { Content } = Layout;

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
  const isiPad = useMobile('xl');
  const [segmented, setSegmented] = useState<SegmentedValue>(CourseTypes.WeeklyClasses);
  const [segmentedData, setSegmentedData] = useState<SegmentedCoursesProps[]>();
  const [copySegmentedData, setCopySegmentedData] = useState<SegmentedCoursesProps[]>();
  const { data: courses } = useGetCourses({});
  const COURSE_TYPES = Object.values(CourseTypes);

  // get reviews
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  // course level type options
  const levelTypeOptions = useCourseOptions('levelType');

  // get all course level types as data
  const levelTypeData = levelTypeOptions?.map((item) => item?.value);

  // get quarter options
  const quarterOptions = useCourseOptions('quarter');

  // weekly === online
  const classifyCourses = (type: CourseTypes) => {
    switch (type) {
      case CourseTypes.AllClasses:
        return courses?.data;
      case CourseTypes.WeeklyClasses:
        return courses?.data?.filter((item) => item?.attributes?.classMode === ClassMode.OnlineLive);
      case CourseTypes.InPersonCamps:
        return courses?.data?.filter((item) => item?.attributes?.isCamp);
      default:
        return courses?.data;
    }
  };

  // reclassify
  const reclassifyCourses = (courseType: CourseTypes, primaryData: string[] | undefined) => {
    const classifiedCourses = classifyCourses(courseType);
    const sortClassifiedCourses = classifiedCourses?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
    return {
      primaryTitle: courseType,
      children: primaryData?.map((levelType) => {
        return {
          secondaryTitle: levelType,
          children: sortClassifiedCourses?.filter((filteredCourse) => {
            // weekly课程下不显示 Java & APCS Classes和Mock Test Classes
            if (courseType === CourseTypes.WeeklyClasses && ['Java & APCS Classes', 'Mock Test Classes'].includes(levelType)) {
              return false;
            } else {
              return filteredCourse?.attributes?.courseLevelType?.data?.attributes?.type === levelType;
            }
          })
        };
      })
    };
  };

  // all weekly in person需要所有的levels，其余的只需要自己作为一二级level
  const reclassifiedCourses = COURSE_TYPES?.map((courseType) => {
    if ([CourseTypes.AllClasses, CourseTypes.WeeklyClasses, CourseTypes.InPersonCamps].includes(courseType)) {
      return reclassifyCourses(courseType, levelTypeData);
    } else {
      return reclassifyCourses(courseType, [courseType]);
    }
  });

  // 去除再次分类二级课程为空的数据
  const removeEmptyChildren = (data: SegmentedCoursesProps[]) => {
    if (data) {
      return [
        {
          primaryTitle: data[0]?.primaryTitle,
          children: data[0]?.children?.filter((item) => item?.children?.length !== 0)
        }
      ];
    }
  };

  useEffect(() => {
    const segmentedData = reclassifiedCourses?.filter((item) => item?.primaryTitle === segmented);
    const result = removeEmptyChildren(segmentedData);
    setSegmentedData(result);
    setCopySegmentedData(result);
  }, [segmented, courses]);

  // hash跳转，清空筛选的表单
  const onSegmentedChange = (value: SegmentedValue | RadioChangeEvent) => {
    history.replaceState(null, '', pathname);
    form.resetFields();
    setSegmented(typeof value === 'object' ? value.target.value : value);
  };

  // 监听从link跳转过来的hash值
  const hashSegmentedMap = new Map([
    ['#weekly', CourseTypes.WeeklyClasses],
    ['#camps', CourseTypes.InPersonCamps],
    ['#mock-test-classes', CourseTypes.MockTestClasses],
    ['#apcs', CourseTypes.JavaAPCSClasses]
  ]);
  useEffect(() => {
    if (hashSegmentedMap.get(hash)) {
      const hashValue = hashSegmentedMap.get(hash);
      setSegmented(hashValue as SegmentedValue);
    } else {
      scrollIntoView(hash);
    }
  }, [hash, segmentedData]);

  // filter data by segmented
  const onFinish = (values: { category: string; quarter: string }) => {
    const { category, quarter } = values;
    let result;
    if (!category && !quarter) {
      result = copySegmentedData;
    }
    if (copySegmentedData) {
      const primaryData = copySegmentedData[0];
      if (category && quarter) {
        result = [
          {
            primaryTitle: primaryData?.primaryTitle,
            children: primaryData?.children
              ?.filter((item) => item?.secondaryTitle === category)
              ?.map((item) => ({
                secondaryTitle: item?.secondaryTitle,
                children: item?.children?.filter((course) => course?.attributes?.schoolQuarter === quarter)
              }))
          }
        ];
      } else if (category) {
        result = [
          {
            primaryTitle: primaryData?.primaryTitle,
            children: primaryData?.children?.filter((item) => item?.secondaryTitle === category)
          }
        ];
      } else if (quarter) {
        result = [
          {
            primaryTitle: primaryData?.primaryTitle,
            children: primaryData?.children?.map((item) => ({
              secondaryTitle: item?.secondaryTitle,
              children: item?.children?.filter((course) => course?.attributes?.schoolQuarter === quarter)
            }))
          }
        ];
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
            offsetTop={72}
            onChange={(isAffix) => {
              const segmentedDom = document.getElementById('segmentedDom');
              if (isAffix && segmentedDom) {
                segmentedDom.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
              } else if (segmentedDom) {
                segmentedDom.style.boxShadow = 'initial';
              }
            }}
          >
            <SegmentedRadioGroup value={segmented} setValue={onSegmentedChange} isRadioGroup={isMobile} options={useEventOptions('course')} id="segmentedDom" />
          </Affix>
          {!isMobile && <div className={styles.form} />}
          <Form
            layout="inline"
            form={form}
            initialValues={{ quarter: 'Winter' }}
            className={styles.form}
            onFinish={onFinish}
            style={isiPad ? { justifyContent: 'center', paddingRight: 0 } : { paddingRight: 0 }}
          >
            <Form.Item name="category" style={isMobile ? { width: '100%', marginTop: 8 } : {}}>
              <Select style={{ width: isMobile ? '100%' : 240 }} placeholder={'Category'} options={levelTypeOptions} allowClear />
            </Form.Item>
            <Form.Item name="quarter" style={isMobile ? { width: '100%', marginTop: 8 } : {}}>
              <Select style={{ width: isMobile ? '100%' : 240 }} placeholder={'Quarter'} options={quarterOptions} allowClear />
            </Form.Item>
            <Form.Item style={isMobile ? { width: '100%', marginTop: 8 } : { marginInlineEnd: 0 }}>
              <Button type={'primary'} className={styles.button} style={isiPad ? { width: '100%' } : {}} htmlType="submit">
                {t('Search')}
              </Button>
            </Form.Item>
          </Form>

          {segmentedData?.map((item) => {
            return (
              <div key={item?.primaryTitle}>
                <div className={styles.title}>{item?.primaryTitle}</div>
                {item?.children?.map((v, j) => {
                  return (
                    <div key={v?.secondaryTitle} id={'#classify' + j}>
                      <Collapse defaultActiveKey={v?.secondaryTitle} ghost style={{ marginBottom: 30 }} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                        <Panel
                          key={v?.secondaryTitle}
                          header={
                            <div className={styles.paneBox}>
                              <div className={styles.panelTitle}>{v?.secondaryTitle}</div>
                              <span className={styles.courseNum}>{v?.children?.length} courses</span>
                            </div>
                          }
                        >
                          <Space size={isMobile ? 24 : 44} className={styles.cardSpace}>
                            {v?.children?.map((g, index) => {
                              return (
                                <ClassCard
                                  key={g?.id}
                                  border={'bottom'}
                                  index={index}
                                  animate={false}
                                  title={`${g?.attributes?.courseCode}: ${getTransResult(lang, g?.attributes?.courseTitleZh, g?.attributes?.courseTitleEn)}`}
                                  list={getLangResult(lang, g?.attributes?.courseShortDescriptionZh, g?.attributes?.courseShortDescriptionEn) as string[]}
                                  time={`${g?.attributes?.lessonNum} ${getWeeksDays(g?.attributes?.frequency)}`}
                                  href={`/courses/${segmented === CourseTypes.InPersonCamps ? 'camps' : 'detail'}/${g?.id}`}
                                  bilingual={g?.attributes?.isBilingual}
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
