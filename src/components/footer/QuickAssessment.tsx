'use client';
import React from 'react';
import { Space, Form, Input, Button, Image, Typography } from 'antd';
import styles from './QuickAssessment.module.scss';

const { Title } = Typography;
const QuickAssessment: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <div className={styles.quickAssessmentContainer}>
      <div className={styles.quickAssessment}>
        <Space direction='vertical' align='center' className={styles.space}>
          <div className={styles.title}>
            <Title>花一分钟时间，看看你离</Title>
            <Title>Quick assessment to match your kid to the right class</Title>
          </div>
          {/* 表单是否需要这么多字段 */}
          {/* <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className=''
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form> */}
        </Space>
      </div>
    </div >
  )
}

export default QuickAssessment;
