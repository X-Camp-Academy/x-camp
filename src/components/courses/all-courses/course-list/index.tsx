import { ClassMode, CourseQuarter, GetCourses, LevelType } from '@/apis/strapi-client/define';
import { useGetCourses } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { SearchOutlined } from '@ant-design/icons';
import { Col, Form, Input, Pagination, Row, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { CourseOptionsProps, useCourseOptions } from '../../public';
import CourseItem from './course-item';
import styles from './index.module.scss';

interface FiltersProps {
  classMode?: { $eq: ClassMode };
  courseQuarter?: { $eq: CourseQuarter };
  levelType?: { $eq: LevelType };
  $or?: Array<{ [key: string]: { $containsi: string } }>;
}
const CourseList: React.FC = () => {
  const ref = useRef(null);
  const isMobile = useMobile();
  const isiPad = useMobile('xl');
  const { format: t } = useLang();
  const [form] = Form.useForm();
  const { data: courses, runAsync } = useGetCourses({});
  const defaultPagination = { page: 1, pageSize: 10 };
  const [pagination, setPagination] = useState(defaultPagination);
  const [filters, setFilters] = useState<FiltersProps>({ courseQuarter: { $eq: CourseQuarter.Q2 } });

  useEffect(() => {
    runAsync({
      populate: '*',
      sort: ['order:desc'],
      filters: { ...filters },
      pagination: { ...pagination }
    });
  }, [pagination, filters]);

  const onFinish = (values: { classMode: ClassMode; levelType: LevelType; courseQuarter: CourseQuarter; search: string }) => {
    const newFilters = { ...filters };
    const { classMode, levelType, courseQuarter, search } = values;

    classMode ? (newFilters['classMode'] = { $eq: classMode }) : delete newFilters['classMode'];
    levelType ? (newFilters['levelType'] = { $eq: levelType }) : delete newFilters['levelType'];
    courseQuarter ? (newFilters['courseQuarter'] = { $eq: courseQuarter }) : delete newFilters['courseQuarter'];

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

  const onValuesChange = () => {
    form.submit();
  };

  return (
    <div className={`${styles.courseList} container`} ref={ref}>
      <Form
        layout={isiPad ? 'vertical' : 'inline'}
        form={form}
        className={styles.form}
        onFinish={onFinish}
        initialValues={{ courseQuarter: CourseQuarter.Q2 }}
        onValuesChange={onValuesChange}
      >
        <Row gutter={isMobile ? [16, 0] : [16, 8]} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item name={'classMode'} label={t('ClassMode')}>
              <Select
                placeholder={'Show All'}
                options={useCourseOptions('classMode') as CourseOptionsProps<ClassMode>[]}
                className={styles.select}
                allowClear
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={7} xl={7}>
            <Form.Item name={'levelType'} label={t('CourseLevel')}>
              <Select
                placeholder={'Show All'}
                options={useCourseOptions('levelType') as CourseOptionsProps<LevelType>[]}
                className={styles.select}
                allowClear
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Form.Item name={'courseQuarter'} label={t('Quarter')}>
              <Select
                placeholder={'Show All'}
                options={useCourseOptions('courseQuarter') as CourseOptionsProps<CourseQuarter>[]}
                className={styles.select}
                allowClear
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={5} xl={5}>
            <Form.Item name="search">
              <Input
                suffix={<SearchOutlined style={{ color: '#d9d9d9' }} />}
                allowClear
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div style={{ marginTop: isMobile ? 16 : 35, paddingRight: '7px' }}>
        {courses?.data?.map((item) => {
          return (
            <a key={item?.id} href={`/courses/course-detail/${item?.id}`}>
              <CourseItem {...handleObject(item)} />
            </a>
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

export default CourseList;
