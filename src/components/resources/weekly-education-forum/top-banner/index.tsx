import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { Carousel, Space } from 'antd';
const cx = classNames.bind(styles);

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={cx('container', styles.content)}>
        <Space className={styles.carousel}>
          <div className={styles.item}>
            <div className={styles.title}>{'Weekly Education Forum'}</div>
            <div className={styles.description}>
              {`Provide support to the community of teenagers and parents who love programming education.
              Invite experienced speakers to share in our community.`}
            </div>
          </div>
          <img src="/image/resources/weekly-education-forum-banner.png"></img>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
