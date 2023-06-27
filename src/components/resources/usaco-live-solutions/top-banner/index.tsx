import React from 'react';
import styles from './index.module.scss';
import { Button } from 'antd';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={cx('container', styles.content)}>
        <div className={styles.title}>{'USACO Live Solutions'}</div>
        <div className={styles.description}>
          {
            'X-Camp has hosted and co-host with CPI about the USACO Live solutions from Bronze to Gold levels since 2022.'
          }
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
