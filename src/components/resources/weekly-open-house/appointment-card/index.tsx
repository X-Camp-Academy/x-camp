import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { Button } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

const AppointmentCard = () => {
  return (
    <div className={'container'}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.title}>
            {'Time conflict？We are here for you!'}
          </div>
          <div className={styles.description}>
            {
              'X-Camp course consultants are happy to provide 1 on 1 meeting at your available time. '
            }
          </div>
          <Button className={styles.btn}>
            {'Make an appointment'}
            <CarryOutOutlined />
          </Button>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContain}>
            <img src="/image/about-us/introduction/top-banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
