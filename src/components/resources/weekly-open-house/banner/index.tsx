import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import { LaptopOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
  const paragraph = (
    <>
      {t('WeeklyOpenHouse.Banner.Desc1')}
      <br />
      {t('WeeklyOpenHouse.Banner.Desc2')}
    </>
  );
  return (
    <div className={styles.banner}>
      <CommonBanner image={'/image/about-us/banner-joinUs.png'} title={t('WeeklyOpenHouse1')} titleClassName={styles.title} paragraphClassName={styles.paragraph} paragraph={paragraph} />
      <div className={styles.bottomInfo}>
        <Button
          size="large"
          className={styles.contactBtn}
          onClick={() => {
            router.push('/about-us/contact-us');
          }}
        >
          <span>{t('ZoomLink')}</span>
          <LaptopOutlined />
        </Button>
        <div className={styles.dateTime}>{t('JoinWay.Time')}</div>
      </div>
    </div>
  );
};

export default Banner;
