'use client';
import React from 'react';
import styles from './index.module.scss';
import { Button, Form, Input, InputNumber, Layout, Select } from 'antd';
import { useMobile } from '@/utils';

const { Content } = Layout;

const contestOptions = [
  {
    label: '2023 December Contest',
    value: '2023 December Contest'
  },
  {
    label: '2024 January Contest',
    value: '2024 January Contest'
  },
  {
    label: '2024 February Contest',
    value: '2024 February Contest'
  },
  {
    label: '2024 March US Open',
    value: '2024 March US Open'
  },
];
const levelOptions = [
  {
    label: 'Bronze',
    value: 'Bronze'
  },
  {
    label: 'Silver',
    value: 'Silver'
  },
  {
    label: 'Gold',
    value: 'Gold'
  },
  {
    label: 'Platinum',
    value: 'Platinum'
  },
];
const testCases = [
  {
    name: 'problemA',
    label: 'Problem A'
  },
  {
    name: 'problemB',
    label: 'Problem B'
  },
  {
    name: 'problemC',
    label: 'Problem C'
  },
];

const USACOReport: React.FC = () => {
  const isMobile = useMobile();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Layout className={styles.usacoReportContainer}>
      <Content>
        <div className={`${styles.usacoReport} container`}>
          <div className={styles.title}>USACO Report Card</div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            className={styles.form}
            initialValues={{
              contest: contestOptions[0].value,
              level: levelOptions[0].value,
              currentId: 'none for non X-Camp Students'
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="contest"
              label="Which contest did you take"
              rules={[{ required: true, message: 'Please select contest!' }]}
            >
              <Select allowClear options={contestOptions} />
            </Form.Item>


            <Form.Item
              name="level"
              label="Which level did you take"
              rules={[{ required: true, message: 'Please select contest level!' }]}
            >
              <Select allowClear options={levelOptions} />
            </Form.Item>

            {
              isMobile ? <div style={{ marginBottom: 16 }}>How many test cases did you pass</div> : <Form.Item label="How many test cases did you pass" />
            }

            {
              testCases?.map(item => (
                <Form.Item
                  key={item?.name}
                  name={item?.name}
                  label={item?.label}
                  rules={[{
                    required: true,
                    message: 'Please input the correct number of test cases!',
                    type: 'number',
                    min: 0,
                    max: 99
                  },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              ))
            }

            <Form.Item
              name="name"
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="grade"
              label="Grade"
              rules={[{ required: true, message: 'Please select grade!' }]}
            >
              <Select allowClear options={levelOptions} />
            </Form.Item>

            <Form.Item
              name="currentId"
              label="Current X-Camp ID"
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={isMobile ? {} : { offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Submit to get your analytic report
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default USACOReport;
