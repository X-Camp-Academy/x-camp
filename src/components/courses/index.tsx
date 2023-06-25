'use client';
import { Collapse, ConfigProvider, Divider, Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import TopBanner from './catalog/top-banner';
import type { CollapseProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { Content } = Layout;
const Courses = () => {
  // const items: CollapseProps[''] = [
  //   {
  //     key: '1',
  //     label: 'This is panel header 1',
  //     children: <p>{'123'}</p>,
  //   },
  // ];
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
                <p>{'123'}</p>
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
