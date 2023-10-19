import { useLang } from '@/hoc/with-intl/define';
import dynamic from 'next/dynamic';
import React from 'react';

const CommonBanner = dynamic(() => import('@/components/common/common-banner'));

const Banner: React.FC = () => {
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
  return <CommonBanner image={'/image/resources/contest-banner.png'} title={t('Contests')} paragraph={paragraph} />;
};

export default Banner;
