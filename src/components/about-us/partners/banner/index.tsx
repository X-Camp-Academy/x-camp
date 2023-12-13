import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Partner.Desc1')}
      {t('Partner.Desc2')}
      {t('Partner.Desc3')}
    </>
  );

  return <CommonBanner image={'/image/about-us/partners-banner.png'} title={t('Partners')} paragraph={paragraph} />;
};

export default Banner;
