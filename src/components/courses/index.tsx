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
import {
  CaretRightOutlined,
  ClockCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';
import ColorfulCard from '../common/colorful-card';
import { useRouter } from 'next/navigation';
import { classesData } from './define';
import Comments from '../home/Comments';
const { Panel } = Collapse;
const { Content } = Layout;
const { Title, Text } = Typography;
const Courses = () => {
  const router = useRouter();

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
            {classesData.map((item) => {
              return (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <div className={styles.title}>{item.title}</div>
                  </div>
                  {item.children.map((v) => {
                    return (
                      <Collapse
                        key={v.header}
                        defaultActiveKey={v.header}
                        ghost
                        style={{ marginBottom: 30 }}
                        expandIcon={({ isActive }) => (
                          <CaretRightOutlined rotate={isActive ? 90 : 0} />
                        )}
                      >
                        <Panel
                          key={v.header}
                          header={
                            <div className={styles.panelTitle}>{v.header}</div>
                          }
                        >
                          <Space
                            size={27}
                            style={{ width: '100%', flexWrap: 'wrap' }}
                          >
                            {v.children.map((g, index) => {
                              return (
                                <ColorfulCard
                                  key={g.id}
                                  border={'bottom'}
                                  index={index}
                                  animate={false}
                                  className={styles.colorfulCard}
                                >
                                  <Card className={styles.card}>
                                    <Space
                                      direction="vertical"
                                      style={{
                                        height: '100%',
                                        justifyContent: 'space-between',
                                      }}
                                    >
                                      <Title className={styles.cardTitle}>
                                        {
                                          'CS100P: Python Intro with Creative Projects'
                                        }
                                      </Title>
                                      <ul className={styles.list}>
                                        <li>
                                          6th+ Graders. No prior coding
                                          expected…
                                        </li>
                                      </ul>
                                      <Space className={styles.bottom}>
                                        <Space className={styles.week} size={5}>
                                          <ClockCircleOutlined />
                                          <span>{'10 weeks'}</span>
                                        </Space>
                                        <RightCircleOutlined
                                          onClick={() =>
                                            router.push(
                                              `/courses/detail/${g.id}`
                                            )
                                          }
                                          className={styles.link}
                                        />
                                      </Space>
                                    </Space>
                                  </Card>
                                </ColorfulCard>
                              );
                            })}
                          </Space>
                        </Panel>
                      </Collapse>
                    );
                  })}
                  <Divider className={styles.divider} />
                </>
              );
            })}
          </div>
          <Comments />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Courses;
