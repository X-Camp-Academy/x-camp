import { CourseQuarter, GetCourses } from '@/apis/strapi-client/define';
import { useGetCourses } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { SearchOutlined } from '@ant-design/icons';
import { useSize } from 'ahooks';
import { Button, Col, Divider, Form, Input, Pagination, Row, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import CourseCard from './course-card';
import styles from './index.module.scss';

const ScheduleTable: React.FC = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  const { format: t } = useLang();
  const [form] = Form.useForm();
  const { data: courses, runAsync } = useGetCourses({});
  const defaultPagination = { page: 1, pageSize: 10 };
  const [pagination, setPagination] = useState(defaultPagination);
  const [filters, setFilters] = useState<{ [key: string]: string | { $eq: string } } | { [key: string]: string | { type: { $eq: string } } } | any>({});

  const isMobile = useMobile();
  const selectItems = [
    {
      name: 'classMode',
      text: t('CourseMode'),
      options: [
        {
          label: 'Online Live',
          value: 'Online Live'
        },
        {
          label: 'In-person',
          value: 'In-person'
        }
      ]
    },
    {
      name: 'courseLevelType',
      text: t('CourseLevel'),
      options: [
        {
          label: 'Python for Beginner',
          value: 'Python for Beginner'
        },
        {
          label: 'USACO Bronze Knowledge',
          value: 'USACO Bronze Knowledge'
        },
        {
          label: 'USACO Silver Knowledge',
          value: 'USACO Silver Knowledge'
        },
        {
          label: 'USACO Gold Knowledge',
          value: 'USACO Gold Knowledge'
        },
        {
          label: 'USACO Grandmaster Classes',
          value: 'USACO Grandmaster Classes'
        },
        {
          label: 'Java & APCS Classes',
          value: 'Java & APCS Classes'
        },
        {
          label: 'Mock Test Classes',
          value: 'Mock Test Classes'
        }
      ]
    },
    {
      name: 'schoolQuarter',
      text: t('Quarter'),
      options: Object.values(CourseQuarter)?.map((item) => {
        return {
          label: t(item),
          value: item
        };
      })
    }
  ];
  useEffect(() => {
    runAsync({
      populate: '*',
      sort: ['order:desc'],
      filters: { ...filters },
      pagination: { ...pagination }
    });
  }, [pagination, filters]);

  const onFinish = (values: { classMode: string; courseLevelType: string; schoolQuarter: string; search: string }) => {
    const newFilters = { ...filters };
    const { classMode, courseLevelType, schoolQuarter, search } = values;

    classMode ? (newFilters['classMode'] = { $eq: classMode }) : delete newFilters['classMode'];
    courseLevelType ? (newFilters['courseLevelType'] = { type: { $eq: courseLevelType } }) : delete newFilters['courseLevelType'];
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
    <div className={styles.scheduleTable} ref={ref}>
      <div className={'container'}>
        <Form layout={size && size?.width < 1400 ? 'vertical' : 'inline'} form={form} className={styles.form} onFinish={onFinish}>
          <Row gutter={[16, 8]} className={styles.row}>
            {selectItems?.map((selectItem, index) => (
              <Col key={index} xs={24} sm={24} md={24} lg={6}>
                <Form.Item name={selectItem?.name} label={selectItem?.text}>
                  <Select placeholder={'Show All'} options={selectItem?.options} className={styles.select} allowClear />
                </Form.Item>
              </Col>
            ))}

            <Col xs={24} sm={24} md={24} lg={4}>
              <Form.Item name="search">
                <Input suffix={<SearchOutlined style={{ color: '#d9d9d9' }} />} allowClear />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={24} lg={2}>
              <Form.Item>
                <Button type={'primary'} className={styles.button} htmlType="submit">
                  {t('Search')}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div style={{ marginTop: isMobile ? 16 : 35 }}>
          {courses?.data?.map((item) => {
            return (
              <>
                <div
                  className={styles.courseCardContainer}
                  key={item?.id}
                  onClick={() => {
                    window.location.href = `/courses/detail/${item?.id}`;
                  }}
                >
                  <CourseCard {...handleObject(item)} />
                </div>
                <Divider style={{ marginTop: 35 }} />
              </>
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
        />
      </div>
    </div>
  );
};

export default ScheduleTable;
