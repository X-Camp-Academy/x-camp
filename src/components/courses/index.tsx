'use client';
import { ClassMode, GetCourses, LevelType, SchoolQuarter } from '@/apis/strapi-client/define';
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
import SegmentedRadioGroup from '../common/segmented-radio-group';
import Banner from './banner';
import { CourseType } from './define';
import styles from './index.module.scss';
import { CourseOptionsProps, useCourseOptions } from './public';

const { Panel } = Collapse;
const { Content } = Layout;

interface CoursesDataProps {
  courseLevelType: CourseType | LevelType;
  children: StrapiResponseDataItem<GetCourses>[] | undefined;
}

interface FiltersProps {
  classMode?: { $eq: ClassMode };
  levelType?: { $eq: LevelType };
  schoolQuarter?: { $eq: SchoolQuarter };
}

const Courses: React.FC = () => {
  const { hash } = window.location;
  const pathname = usePathname();
  const [form] = Form.useForm();
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  const isiPad = useMobile('xl');
  const [segmentedValue, setSegmentedValue] = useState<CourseType>(CourseType.WeeklyClasses);
  const [filters, setFilters] = useState<FiltersProps>({ schoolQuarter: { $eq: SchoolQuarter.Winter } });
  const [coursesData, setCoursesData] = useState<CoursesDataProps[]>();
  const { data: courses, runAsync } = useGetCourses({});
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  const levelTypes = Object.values(LevelType);
  const courseTypeOptions = useCourseOptions('courseType');
  const levelTypeOptions = useCourseOptions('levelType');
  const quarterOptions = useCourseOptions('schoolQuarter');

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
  const onFinish = (values: { levelType: LevelType; schoolQuarter: SchoolQuarter }) => {
    const { levelType, schoolQuarter } = values;
    const newFilters = { ...filters };

    levelType ? (newFilters['levelType'] = { $eq: levelType }) : delete newFilters['levelType'];
    schoolQuarter ? (newFilters['schoolQuarter'] = { $eq: schoolQuarter }) : delete newFilters['schoolQuarter'];

    setFilters(newFilters);
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
    } else {
      scrollIntoView(hash);
    }
  }, [hash, coursesData]);
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
            <SegmentedRadioGroup value={segmentedValue} setValue={onSegmentedChange} isRadioGroup={isMobile} options={courseTypeOptions as CourseOptionsProps<CourseType>[]} id="segmentedDom" />
          </Affix>

          {!isMobile && <div className={styles.form} />}

          <Form
            layout="inline"
            form={form}
            initialValues={{ schoolQuarter: 'Winter' }}
            className={styles.form}
            onFinish={onFinish}
            style={isiPad ? { justifyContent: 'center', paddingRight: 0 } : { paddingRight: 0 }}
          >
            <Form.Item name="levelType" style={isMobile ? { width: '100%', marginTop: 8 } : {}}>
              <Select style={{ width: isMobile ? '100%' : 240 }} placeholder={t('LevelType')} options={levelTypeOptions as CourseOptionsProps<LevelType>[]} allowClear />
            </Form.Item>
            <Form.Item name="schoolQuarter" style={isMobile ? { width: '100%', marginTop: 8 } : {}}>
              <Select style={{ width: isMobile ? '100%' : 240 }} placeholder={t('SchoolQuarter')} options={quarterOptions as CourseOptionsProps<SchoolQuarter>[]} allowClear />
            </Form.Item>
            <Form.Item style={isMobile ? { width: '100%', marginTop: 8 } : { marginInlineEnd: 0 }}>
              <Button type={'primary'} className={styles.button} style={isiPad ? { width: '100%' } : {}} htmlType="submit">
                {t('Search')}
              </Button>
            </Form.Item>
          </Form>

          <div className={styles.title}>{segmentedValue}</div>
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
                            href={`/courses/${segmentedValue === CourseType.InPersonCamps ? 'camps' : 'detail'}/${course?.id}`}
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

export default Courses;
