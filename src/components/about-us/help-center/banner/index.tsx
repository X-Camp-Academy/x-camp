import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('HelpCenter.Banner.Desc1')}
      <br />
      {t('HelpCenter.Banner.Desc2')}
      <br />
      {t('HelpCenter.Banner.Desc3')}
    </>
  );

  return <CommonBanner image={'/image/about-us/help-center-banner.png'} title={t('HelpCenter')} paragraph={paragraph} />;
};

export default Banner;
