import React from 'react';
import { useLang } from '@/hoc/with-intl/define';
import CommonBanner from '@/components/common/common-banner';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('USACO.Banner.Desc1')}
      {t('USACO.Banner.Desc2')}
    </>
  );
  return <CommonBanner image={'/image/resources/usaco-banner.png'} title={'USACO'} paragraph={paragraph} />;
};

export default Banner;
