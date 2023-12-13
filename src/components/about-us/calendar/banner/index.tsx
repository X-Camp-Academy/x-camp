import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Calendar.Banner.Desc1')}
      {/* {t('Calendar.Banner.Desc2')}
      {t('Calendar.Banner.Desc3')}
      {t('Calendar.Banner.Desc4')} */}
    </>
  );

  return (
    <div className={styles.bannerContainer}>
      <CommonBanner title={t('SchoolCalendar')} paragraph={paragraph} image={'/image/about-us/calendar-banner.png'} />
    </div>
  );
};

export default Banner;
