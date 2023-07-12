import React from 'react';
import styles from './index.module.scss';
import { Button, Space } from 'antd';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={cx('container', styles.content)}>
        <Space className={styles.bannerContent}>
          <Space direction={'vertical'}>
            <div className={styles.title}>{'Weekly Open House'}</div>
            <div className={styles.description}>
              {
                'Since 2022 spring quarter, X-Camp provides a weekly open house for students and parents who are interested in X-Camp.'
              }
            </div>
            <Button className={styles.btn}>
              <span>{'Join The Meeting'}</span>
              <img src="/image/resources/weekly-open-house-btn.png" alt="" />
            </Button>
            <div className={styles.dateTime}>
              {'*Tuesday, Weekly, 6:30 - 7:30 PM PDT'}
            </div>
          </Space>

          <img src="/image/resources/weekly-open-house-banner.png"></img>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
