import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Introduction.Banner.Desc1')}
      <br />
      {t('Introduction.Banner.Desc2')}
      <br />
      {t('Introduction.Banner.Desc3')}
      <br />
      {t('Introduction.Banner.Desc4')}
      <br />
      {t('Introduction.Banner.Desc5')}
    </>
  );
  return <CommonBanner image={'/image/about-us/introduction-banner.png'} title="X-Camp Academy" paragraph={paragraph} />;
};

export default Banner;
