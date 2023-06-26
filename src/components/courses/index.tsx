'use client';
import {
  Anchor,
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
import {
  CaretRightOutlined,
  ClockCircleOutlined,
  DownOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';
import ColorfulCard from '../common/colorful-card';
import { useRouter } from 'next/navigation';
import { classesData } from './define';
import Comments from '../home/Comments';
import AnchorNav from './AnchorNav';
const { Panel } = Collapse;
const { Content } = Layout;
const { Title } = Typography;
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
          <div className={`${styles.classContainer} container`}>
            {classesData.map((item, index) => {
              return (
                <div
                  className={'classify'}
                  id={'classify' + index}
                  key={item.title}
                >
                  <Collapse
                    defaultActiveKey={'classifyCollapse' + index}
                    ghost
                    expandIconPosition={'end'}
                    expandIcon={({ isActive }) => (
                      <div className={styles.changeBtn}>
                        <DownOutlined
                          rotate={isActive ? 180 : 0}
                          className={styles.icon}
                        />
                      </div>
                    )}
                  >
                    <Panel
                      key={'classifyCollapse' + index}
                      header={<div className={styles.title}>{item.title}</div>}
                    >
                      <>
                        {item.children.map((v) => {
                          return (
                            <Collapse
                              key={v.header}
                              defaultActiveKey={v.header}
                              ghost
                              style={{ marginBottom: 30 }}
                              expandIcon={({ isActive }) => (
                                <CaretRightOutlined
                                  rotate={isActive ? 90 : 0}
                                />
                              )}
                            >
                              <Panel
                                key={v.header}
                                header={
                                  <div className={styles.panelTitle}>
                                    {v.header}
                                  </div>
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
                                              <Space
                                                className={styles.week}
                                                size={5}
                                              >
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
                      </>
                    </Panel>

                    <Divider className={styles.divider} />
                  </Collapse>
                </div>
              );
            })}
          </div>
          <Comments />
          <AnchorNav />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Courses;
