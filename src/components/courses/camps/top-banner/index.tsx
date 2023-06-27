import React from 'react';
import styles from './index.module.scss';
import { Space } from 'antd';
const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
      <div className={'container'} style={{ height: '100%' }}>
        <Space className={styles.content} align={'center'}>
          <Space direction={'vertical'} size={30}>
            <div className={styles.title}>In-person Camps</div>
            <div className={styles.text}>
              <div>X-Camp has two training camps every year</div>
              <ul>
                <li>Summer Onsite Camps</li>
                <li>Winter Onsite Camps</li>
              </ul>
            </div>
          </Space>
          <img src="/image/about-us/introduction/top-banner.png"></img>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
