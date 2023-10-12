import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Calendar.Banner.Desc1')}
      <br />
      {t('Calendar.Banner.Desc2')}
      <br />
      {t('Calendar.Banner.Desc3')}
      <br />
      {t('Calendar.Banner.Desc4')}
    </>
  );

  return (
    <div className={styles.bannerContainer}>
      <CommonBanner image={'/image/about-us/banner-joinUs.png'} title={t('SchoolCalendar')} titleClassName={styles.title} paragraphClassName={styles.paragraph} paragraph={paragraph} />
    </div>
  );
};

export default Banner;
