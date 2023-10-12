import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('News.Banner.Desc1')}
      <br />
      {t('News.Banner.Desc2')}
      <br />
      {t('News.Banner.Desc3')}
    </>
  );

  return <CommonBanner image={'/image/about-us/achievements-banner.png'} title="News" paragraph={paragraph} />;
};

export default Banner;
