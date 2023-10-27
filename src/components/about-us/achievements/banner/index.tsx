import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Achievements.Banner.Desc1')}
      {t('Achievements.Banner.Desc2')}
      {t('Achievements.Banner.Desc3')}
      {t('Achievements.Banner.Desc4')}
      {t('Achievements.Banner.Desc5')}
    </>
  );
  return <CommonBanner title={t('Achievements')} paragraph={paragraph} image={'/image/about-us/achievements-banner.png'} paragraphFontSize={16} />;
};

export default Banner;
