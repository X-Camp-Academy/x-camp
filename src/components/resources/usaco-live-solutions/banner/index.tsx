import React from 'react';
import { useLang } from '@/hoc/with-intl/define';
import CommonBanner from '@/components/common/common-banner';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('USACOLiveSolutions.Banner.Desc1')}
      {t('USACOLiveSolutions.Banner.Desc2')}
      {t('USACOLiveSolutions.Banner.Desc3')}
    </>
  );
  return <CommonBanner image={'/image/resources/usaco-live-solutions-banner.png'} title={t('USACOLiveSolution')} paragraph={paragraph} />;
};

export default Banner;
