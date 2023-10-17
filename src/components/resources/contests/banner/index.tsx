import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const CommonBanner = dynamic(() => import('@/components/common/common-banner'));

const Banner: React.FC = () => {
  const isMobile = useMobile();
  const { format: t, lang } = useLang();
  const paragraph = (
    <>
      {t('Contests.Banner.Desc1')}
      {lang === 'en' && <br />}
      {t('Contests.Banner.Desc2')}
      <br />
      {t('Contests.Banner.Desc3')}
      {lang === 'en' && <br />}
      {t('Contests.Banner.Desc4')}
      <br />
      {t('Contests.Banner.Desc5')}
    </>
  );
  return (
    <CommonBanner
      image={'/image/about-us/student-recommend-banner.png'}
      title={t('Contests')}
      paragraph={paragraph}
      titleStyle={{ color: '#fff', marginTop: isMobile ? 0 : 96 }}
      paragraphClassName={styles.paragraph}
    />
  );
};

export default Banner;
