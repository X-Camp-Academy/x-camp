import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {'Our teachers are super cool tech pros who have worked at big companies, smart college students studying computers, and champions in tough coding'}
    </>
  );
  return <CommonBanner title={'Faculty'} paragraph={paragraph} paddingRight image={'/image/about-us/banner-faculty.png'} />;
};

export default Banner;
