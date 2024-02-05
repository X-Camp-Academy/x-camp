'use client';
import { ClassMode, CourseQuarter, GetCourses, LevelType } from '@/apis/strapi-client/define';
import { useGetCourses, useGetReviews } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import Reviews from '@/components/common/reviews';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getLangResult, getTransResult, getWeeksDays } from '@/utils/public';
import { CaretRightOutlined } from '@ant-design/icons';
import { Affix, Collapse, Form, Layout, RadioChangeEvent, Select, Space } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ClassCard from '../class-card';
import Banner from '../banner';
import { CourseType } from '../define';
import styles from './index.module.scss';
import { CourseOptionsProps, useCourseOptions } from '../public';
import SegmentedRadioGroup from '../../common/segmented-radio-group';

const { Panel } = Collapse;
const { Content } = Layout;

interface CoursesDataProps {
  courseLevelType: CourseType | LevelType;
  children: StrapiResponseDataItem<GetCourses>[] | undefined;
}

interface FiltersProps {
  classMode?: { $eq: ClassMode };
  levelType?: { $eq: LevelType };
  courseQuarter?: { $eq: CourseQuarter };
}

const AllClasses: React.FC = () => {
  const { hash } = window.location;
  const pathname = usePathname();
  const [form] = Form.useForm();
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  const isiPad = useMobile('lg');
  const [segmentedValue, setSegmentedValue] = useState<CourseType>(CourseType.WeeklyClasses);
  const [filters, setFilters] = useState<FiltersProps>({ courseQuarter: { $eq: CourseQuarter.Q2 } });
  const [coursesData, setCoursesData] = useState<CoursesDataProps[]>();
  const { data: courses, runAsync } = useGetCourses({ manual: true });
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  const levelTypes = Object.values(LevelType);
  const courseTypeOptions = useCourseOptions('courseType');
  const levelTypeOptions = useCourseOptions('levelType');
  const quarterOptions = useCourseOptions('courseQuarter');



  console.log(courseTypeOptions);
  
  // on segmentedValue or filters changed
  useEffect(() => {
    const newFilters = { ...filters };
    switch (segmentedValue) {
      case CourseType.WeeklyClasses:
        newFilters['classMode'] = { $eq: ClassMode.OnlineLive };
        break;
      case CourseType.InPersonCamps:
        newFilters['classMode'] = { $eq: ClassMode.InPerson };
        break;
      default: // all/mock/java
        break;
    }

    runAsync({
      populate: '*',
      sort: ['order:desc'],
      filters: newFilters
    });
  }, [segmentedValue, filters]);

  // on courses changes
  useEffect(() => {
    const newLevelTypes = [CourseType.MockTestClasses, CourseType.JavaAPCSClasses].includes(segmentedValue) ? [segmentedValue] : levelTypes;
    const data = newLevelTypes?.map((levelType) => {
      return {
        courseLevelType: levelType,
        children: courses?.data?.filter((course) => {
          // weekly课程下不显示 Java & APCS Classes和Mock Test Classes
          if (CourseType.WeeklyClasses === segmentedValue && [LevelType.MockTestClasses, LevelType.JavaAPCSClasses].includes(levelType as LevelType)) {
            return false;
          } else {
            return course?.attributes?.levelType === levelType;
          }
        })
      };
    });

    const result = data?.filter((item) => {
      return item?.children?.length !== 0;
    });

    setCoursesData(result);
  }, [courses]);

  // set segmentedValue
  const onSegmentedChange = (value: SegmentedValue | RadioChangeEvent) => {
    history.replaceState(null, '', pathname);
    setSegmentedValue(typeof value === 'object' ? value?.target?.value : value);
  };

  // on search
  const onFinish = (values: { levelType: LevelType; courseQuarter: CourseQuarter }) => {
    const { levelType, courseQuarter } = values;
    const newFilters = { ...filters };

    levelType ? (newFilters['levelType'] = { $eq: levelType }) : delete newFilters['levelType'];
    courseQuarter ? (newFilters['courseQuarter'] = { $eq: courseQuarter }) : delete newFilters['courseQuarter'];

    setFilters(newFilters);
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = isMobile ? element?.offsetTop - 176 : element?.offsetTop - 96;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  // set hash
  const segmentedHashMap = new Map([
    ['#weekly', CourseType.WeeklyClasses],
    ['#camps', CourseType.InPersonCamps],
    ['#mock-test-classes', CourseType.MockTestClasses],
    ['#apcs', CourseType.JavaAPCSClasses]
  ]);
  useEffect(() => {
    if (segmentedHashMap.get(hash)) {
      const hashValue = segmentedHashMap.get(hash);
      setSegmentedValue(hashValue as CourseType);
      scrollToElement('#classify0');
    } else {
      scrollToElement(hash);
    }
  }, [hash, coursesData]);

  const onValuesChange = () => {
    form.submit();
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
            <SegmentedRadioGroup
              value={segmentedValue}
              setValue={onSegmentedChange}
              isRadioGroup={isiPad}
              options={courseTypeOptions as CourseOptionsProps<CourseType>[]}
              id="segmentedDom"
            />
          </Affix>

          <Form
            layout="inline"
            form={form}
            initialValues={{ courseQuarter: CourseQuarter.Q2 }}
            className={styles.form}
            onFinish={onFinish}
            onValuesChange={onValuesChange}
          >
            <Form.Item style={isMobile ? { width: '100%' } : {}}>
              <div className={styles.title}>{segmentedValue}</div>
            </Form.Item>
            <Form.Item name="levelType" style={isiPad ? { width: '100%', marginTop: 8 } : {}}>
              <Select
                style={{ width: isiPad ? '100%' : 240 }}
                placeholder={t('LevelType')}
                options={levelTypeOptions as CourseOptionsProps<LevelType>[]}
                allowClear
              />
            </Form.Item>
            <Form.Item name="courseQuarter" style={isiPad ? { width: '100%', marginTop: 8 } : {}}>
              <Select
                style={{ width: isiPad ? '100%' : 240 }}
                placeholder={t('CourseQuarter')}
                options={quarterOptions as CourseOptionsProps<CourseQuarter>[]}
                allowClear
              />
            </Form.Item>
          </Form>

          {coursesData?.map((courses, i) => {
            return (
              <div key={courses?.courseLevelType} id={'#classify' + i} className={styles.collapseBox}>
                <Collapse
                  defaultActiveKey={courses?.courseLevelType}
                  ghost
                  style={{ marginBottom: 30 }}
                  expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                >
                  <Panel
                    key={courses?.courseLevelType}
                    header={
                      <div className={styles.paneBox}>
                        <div className={styles.panelTitle}>{courses?.courseLevelType}</div>
                        <span className={styles.courseNum}>{courses?.children?.length} courses</span>
                      </div>
                    }
                  >
                    <Space size={isMobile ? 24 : 44} className={styles.cardSpace}>
                      {courses?.children?.map((course, j) => {
                        return (
                          <ClassCard
                            key={course?.id}
                            border={'bottom'}
                            index={j}
                            animate={false}
                            title={`${course?.attributes?.courseCode}: ${getTransResult(lang, course?.attributes?.courseTitleZh, course?.attributes?.courseTitleEn)}`}
                            list={getLangResult(lang, course?.attributes?.courseShortDescriptionZh, course?.attributes?.courseShortDescriptionEn) as string[]}
                            time={`${course?.attributes?.lessonNum} ${getWeeksDays(course?.attributes?.frequency)}`}
                            href={`/courses/${segmentedValue === CourseType.InPersonCamps ? 'camps-detail' : 'course-detail'}/${course?.id}`}
                            bilingual={course?.attributes?.isBilingual}
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

        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default AllClasses;
