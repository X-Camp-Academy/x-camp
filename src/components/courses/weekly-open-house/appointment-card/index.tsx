import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { CarryOutOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './index.module.scss';

const AppointmentCard: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  return (
    <div className={`${styles.appointment} container`}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.title}>{t('OpenHouse.Conflict')}</div>
          <div className={styles.description}>{t('OpenHouse.Conflict.Desc')}</div>
          <a className={styles.btn} href="/#appointment">
            {t('MakeAnAppointment')}
            <CarryOutOutlined />
          </a>
        </div>
        {!isMobile && (
          <div className={styles.right}>
            <div className={styles.imgContain}>
              <img src="/image/courses/appointmentImg.png" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
