'use client';
import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t, lang } = useLang();
  const paragraph = (
    <>
      {t('ContactUs.Banner.Desc1')}
      <br />
      {t('ContactUs.Banner.Desc2')}
      <br />
      {t('ContactUs.Banner.Desc3')}
      {lang === 'en' && <br />}
      {t('ContactUs.Banner.Desc4')}
    </>
  );
  return <CommonBanner image={'/image/about-us/achievements-banner.png'} title={t('ContactXCamp')} paragraph={paragraph} />;
};

export default Banner;
