import { ClassMode, GetCourses, LevelType, SchoolQuarter } from '@/apis/strapi-client/define';
import { useGetCourses } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Pagination, Row, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { CourseOptionsProps, useCourseOptions } from '../../public';
import CourseCard from './course-card';
import styles from './index.module.scss';

interface FiltersProps {
  classMode?: { $eq: ClassMode };
  schoolQuarter?: { $eq: SchoolQuarter };
  levelType?: { $eq: LevelType };
  $or?: Array<{ [key: string]: { $containsi: string } }>;
}
const ScheduleTable: React.FC = () => {
  const ref = useRef(null);
  const isMobile = useMobile();
  const isiPad = useMobile('xl');
  const { format: t } = useLang();
  const [form] = Form.useForm();
  const { data: courses, runAsync } = useGetCourses({});
  const defaultPagination = { page: 1, pageSize: 10 };
  const [pagination, setPagination] = useState(defaultPagination);
  const [filters, setFilters] = useState<FiltersProps>({});

  useEffect(() => {
    runAsync({
      populate: '*',
      sort: ['order:desc'],
      filters: { ...filters },
      pagination: { ...pagination }
    });
  }, [pagination, filters]);

  const onFinish = (values: { classMode: ClassMode; levelType: LevelType; schoolQuarter: SchoolQuarter; search: string }) => {
    const newFilters = { ...filters };
    const { classMode, levelType, schoolQuarter, search } = values;

    classMode ? (newFilters['classMode'] = { $eq: classMode }) : delete newFilters['classMode'];
    levelType ? (newFilters['levelType'] = { $eq: levelType }) : delete newFilters['levelType'];
    schoolQuarter ? (newFilters['schoolQuarter'] = { $eq: schoolQuarter }) : delete newFilters['schoolQuarter'];

    const searchFields = [
      'classLang',
      'classMode',
      'spokenLang',
      'courseCode',
      'courseTitleZh',
      'courseTitleEn',
      'courseShortDescriptionZh',
      'courseShortDescriptionEn',
      'courseLongDescriptionZh',
      'courseLongDescriptionEn'
    ];
    const allSearchFields = searchFields?.map((searchField) => {
      const item: { [key: string]: { $containsi: string } } = {};
      item[searchField] = { $containsi: search };
      return item;
    });
    search ? (newFilters['$or'] = allSearchFields) : delete newFilters['$or'];

    setFilters({ ...newFilters });
    setPagination(defaultPagination);
  };
  const onPaginationChange = (page: number, pageSize: number) => {
    const newPagination = {
      page,
      pageSize
    };
    setPagination(newPagination);
  };

  const handleObject = (item: StrapiResponseDataItem<GetCourses>) => {
    return {
      ...item?.attributes,
      id: item?.id
    };
  };

  return (
    <div className={`${styles.scheduleTable} container`} ref={ref}>
      <Form layout={isiPad ? 'vertical' : 'inline'} form={form} className={styles.form} onFinish={onFinish}>
        <Row gutter={isMobile ? [16, 0] : [16, 8]} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item name={'classMode'} label={t('ClassMode')}>
              <Select placeholder={'Show All'} options={useCourseOptions('classMode') as CourseOptionsProps<ClassMode>[]} className={styles.select} allowClear />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item name={'levelType'} label={t('CourseLevel')}>
              <Select placeholder={'Show All'} options={useCourseOptions('levelType') as CourseOptionsProps<LevelType>[]} className={styles.select} allowClear />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item name={'schoolQuarter'} label={t('Quarter')}>
              <Select placeholder={'Show All'} options={useCourseOptions('schoolQuarter') as CourseOptionsProps<SchoolQuarter>[]} className={styles.select} allowClear />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={4} xl={4} className={styles.lastInput}>
            <Form.Item name="search">
              <Input suffix={<SearchOutlined style={{ color: '#d9d9d9' }} />} allowClear />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={2} xl={2} className={styles.lastButtonCol}>
            <Form.Item style={{ marginInlineEnd: 0 }}>
              <Button type={'primary'} className={styles.button} htmlType="submit">
                {t('Search')}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div style={{ marginTop: isMobile ? 16 : 35, paddingRight: '7px' }}>
        {courses?.data?.map((item) => {
          return (
            <div
              className={styles.courseCardContainer}
              key={item?.id}
              onClick={() => {
                window.location.href = `/courses/detail/${item?.id}`;
              }}
            >
              <CourseCard {...handleObject(item)} />
            </div>
          );
        })}
      </div>

      <Pagination
        onChange={onPaginationChange}
        current={pagination?.page}
        pageSize={pagination?.pageSize}
        total={courses?.meta?.pagination?.total}
        showSizeChanger
        style={{ textAlign: 'center', marginTop: '56px' }}
        className={styles.pagination}
      />
    </div>
  );
};

export default ScheduleTable;
