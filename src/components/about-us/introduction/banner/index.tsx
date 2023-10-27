import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Introduction.Banner.Desc1')},&nbsp;
      {t('Introduction.Banner.Desc2')}.&nbsp;
      {t('Introduction.Banner.Desc3')},&nbsp;
      {t('Introduction.Banner.Desc4')}&nbsp;
      {t('Introduction.Banner.Desc5')}
    </>
  );
  return <CommonBanner title={'X-Camp Academy'} paragraph={paragraph} image={'/image/about-us/introduction-banner.png'} />;
};

export default Banner;
