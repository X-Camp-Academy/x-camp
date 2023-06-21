import React from 'react';
import styles from './index.module.scss';
import { Button, Col, Form, Input, Row, Select, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
interface ScheduleData {
  class: string;
  courseTitle: string;
  grade: string;
  place: string;
  date: string;
  lessons: number;
  time: string;
  fee: string;
}
const ScheduleTable = () => {
  const data: ScheduleData[] = [
    {
      class: 'CS100P',
      courseTitle: 'Fall in Love with Coding',
      grade: '6th+ graders',
      place: 'Online Live',
      date: 'Saturdays 11:00am-1:00pm',
      lessons: 12,
      time: '08/26/2023 05/11/2023',
      fee: '$1,345.00',
    },
    {
      class: 'CS100P',
      courseTitle: 'Fall in Love with Coding',
      grade: '6th+ graders',
      place: 'Online Live',
      date: 'Saturdays 11:00am-1:00pm',
      lessons: 12,
      time: '08/26/2023 05/11/2023',
      fee: '$1,345.00',
    },
    {
      class: 'CS100P',
      courseTitle: 'Fall in Love with Coding',
      grade: '6th+ graders',
      place: 'Online Live',
      date: 'Saturdays 11:00am-1:00pm',
      lessons: 12,
      time: '08/26/2023 05/11/2023',
      fee: '$1,345.00',
    },
    {
      class: 'CS100P',
      courseTitle: 'Fall in Love with Coding',
      grade: '6th+ graders',
      place: 'Online Live',
      date: 'Saturdays 11:00am-1:00pm',
      lessons: 12,
      time: '08/26/2023 05/11/2023',
      fee: '$1,345.00',
    },
  ];
  const columns: ColumnsType<ScheduleData> = [
    {
      title: 'Class',
      key: 'class',
      dataIndex: 'class',
    },
    {
      title: 'Course Title',
      key: 'courseTitle',
      dataIndex: 'courseTitle',
      render: (courseTitle: string) => {
        return (
          <span style={{ color: '#D46B14', textDecoration: 'underline' }}>
            {courseTitle}
          </span>
        );
      },
    },
    {
      title: 'Grade',
      key: 'grade',
      dataIndex: 'grade',
    },
    {
      title: 'Place',
      key: 'place',
      dataIndex: 'place',
    },
    {
      title: 'Date And Time',
      key: 'date',
      dataIndex: 'date',
    },
    {
      title: 'Lessons',
      key: 'lessons',
      dataIndex: 'lessons',
    },
    {
      title: 'Start End Time',
      key: 'time',
      dataIndex: 'time',
    },
    {
      title: 'Fee',
      key: 'fee',
      dataIndex: 'fee',
    },
  ];
  return (
    <div className={styles.scheduleTable}>
      <div className={'container'}>
        <Form layout={'inline'}>
          <Row style={{ width: '100%' }} gutter={[18, 0]}>
            <Col xs={24} sm={24} md={12} lg={4} xl={4}>
              <Form.Item name={'category'} label={'Category'} colon={false}>
                <Select placeholder={'Show All'} className={styles.select} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={4} xl={4}>
              <Form.Item name={'place'} label={'Place'} colon={false}>
                <Select placeholder={'Show All'} className={styles.select} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={4} xl={4}>
              <Form.Item name={'grade'} label={'Grade'} colon={false}>
                <Select placeholder={'Show All'} className={styles.select} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={4} xl={4}>
              <Form.Item name={'semester'} label={'Semester'} colon={false}>
                <Select placeholder={'Show All'} className={styles.select} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={4} xl={4}>
              <Form.Item
                name={'searchCourse'}
                label={'Search Course'}
                colon={false}
              >
                <Input className={styles.select} />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={4}
              xl={4}
              style={{ marginTop: 'auto' }}
            >
              <Form.Item noStyle>
                <Button
                  type={'primary'}
                  htmlType={'submit'}
                  className={styles.button}
                >
                  {'Filter'}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Table
          className={styles.table}
          dataSource={data}
          columns={columns}
          rowKey={'title'}
        />
      </div>
    </div>
  );
};

export default ScheduleTable;
