import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = <>{t('Calendar.Banner.Desc1')}</>;

  return (
    <div className={styles.bannerContainer}>
      <CommonBanner title={t('University_Calendar')} paragraph={paragraph} image={'/image/about-us/calendar-banner.png'} />
    </div>
  );
};

export default Banner;
