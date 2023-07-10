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
            {'Would you like to schedule another time?'}
          </div>
          <div className={styles.description}>
            {
              'X-Camp aim to employ the best people from a wide pool of talent in order to create an environment where everybody’s contribution is valued and respected. '
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
