import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Faculty.Desc')}
    </>
  );
  return <CommonBanner title={'Faculty & Coaches'} paragraph={paragraph} image={'/image/about-us/banner-faculty.png'} />;
};

export default Banner;
