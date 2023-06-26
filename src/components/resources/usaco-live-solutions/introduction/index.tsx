import React from 'react';
import styles from './index.module.scss';
import { Collapse, Divider, Space } from 'antd';
import { ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const UsacoIntro = () => {
  return (
    <div className={styles.introduction}>
      <div className={'container'}>
        <div
          className={styles.description}
        >{`In 2023 newest season, X-Camp hosts the first-ever USACO Live Solutions event
         on the entire web with our top coaches, including USACO Grandmaster Class instructors
          and ICPC World Finalists. They meticulously dissect the competition problems from the 
          USACO Bronze, Silver, and Gold levels, providing in-depth explanations and unraveling 
          the intricacies.`}</div>
        {[
          'X-Camp USACO Gold',
          'X-Camp USACO Silver',
          'X-Camp USACO Bronze',
        ].map((item, index) => {
          return (
            <div key={'video' + index}>
              <Collapse
                ghost
                defaultActiveKey={index}
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
                  key={index}
                  header={<div className={styles.title}>{item}</div>}
                >
                  <Space className={styles.videoPane}>
                    {[1, 2, 3].map((item) => {
                      return (
                        <Space
                          direction={'vertical'}
                          className={styles.videoPanel}
                          key={'panel' + item}
                        >
                          <video controls className={styles.videoBox}>
                            <source
                              src="https://media.strapi.turingstar.com.cn/production/2023/5/_2cd2122d99.mp4?updated_at=2023-05-14T08:17:12.234Z"
                              type="video/mp4"
                            />
                          </video>
                          <div className={styles.videoTitle}>
                            {'USACO 2023 Feb Gold Problem 3 Live Solution'}
                          </div>
                          <Space>
                            <ClockCircleOutlined className={styles.icon} />
                            <div className={styles.videoDate}>
                              {'2023-04-10'}
                            </div>
                          </Space>
                        </Space>
                      );
                    })}
                  </Space>
                </Panel>
              </Collapse>
              <Divider className={styles.divider} />
            </div>
          );
        })}
        <div className={styles.title}>{'X-Camp More USACO Solutions'}</div>
        <a
          href="https://www.youtube.com/playlist?list=PLaGrjYdzFQBtJBaopC8QW9G3Sv39eeifT"
          className={styles.link}
          target={'_blank'}
        >
          {
            'https://www.youtube.com/playlist?list=PLaGrjYdzFQBtJBaopC8QW9G3Sv39eeifT'
          }
        </a>
      </div>
    </div>
  );
};

export default UsacoIntro;
