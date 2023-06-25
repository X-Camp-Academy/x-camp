'use client';
import {
  Card,
  Collapse,
  ConfigProvider,
  Divider,
  Layout,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import styles from './index.module.scss';
import TopBanner from './catalog/top-banner';
import type { CollapseProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import ColorfulCard from '../common/colorful-card';
const { Panel } = Collapse;
const { Content } = Layout;
const { Title, Text } = Typography;
const Courses = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        },
      }}
    >
      <Layout className={styles.courses}>
        <Content>
          <TopBanner />
          <div className="container">
            <div className={styles.title}>Online Courses</div>
            <Collapse
              defaultActiveKey={['1']}
              ghost
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel
                header={<div className={styles.panelTitle}>{'Python'}</div>}
                key="1"
              >
                <ColorfulCard
                  border={'bottom'}
                  index={0}
                  animate={false}
                  className={styles.colorfulCard}
                >
                  <Card className={styles.card}>
                    <Space direction="vertical">
                      <Title className={styles.cardTitle}>
                        {'CS100P: Python Intro with Creative Projects'}
                      </Title>
                      <ul>
                        <li>6th+ Graders. No prior coding expected…</li>
                      </ul>
                      <Space>
                        <div></div>
                      </Space>
                    </Space>
                  </Card>
                </ColorfulCard>
              </Panel>
            </Collapse>
            <Divider />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Courses;
