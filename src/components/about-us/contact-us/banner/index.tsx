'use client';
import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t, lang } = useLang();
  const paragraph = (
    <>
      {t('ContactUs.Banner.Desc1')}
      {t('ContactUs.Banner.Desc2')}
      {t('ContactUs.Banner.Desc3')}
      {t('ContactUs.Banner.Desc4')}
    </>
  );
  return (
    <CommonBanner
      title={t('ContactXCamp')}
      titleStyle={{
        color: '#172142'
      }}
      paragraph={paragraph}
      image={'/image/about-us/contact-us-banner.png'}
    />
  );
};

export default Banner;
