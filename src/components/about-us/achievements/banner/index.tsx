import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Achievements.Banner.Desc1')}
      <br />
      {t('Achievements.Banner.Desc2')}
      <br />
      {t('Achievements.Banner.Desc3')}
      <br />
      {t('Achievements.Banner.Desc4')}
      <br />
      {t('Achievements.Banner.Desc5')}
    </>
  );
  return <CommonBanner title={t('Achievements')} paragraph={paragraph} image={'/image/about-us/achievements-banner.png'} />;
};

export default Banner;
