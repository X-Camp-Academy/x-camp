import React from 'react';
import { useLang } from '@/hoc/with-intl/define';
import CommonBanner from '@/components/common/common-banner';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Contests.Banner.Desc1')}
      {t('Contests.Banner.Desc2')}
      {t('Contests.Banner.Desc3')}
      {t('Contests.Banner.Desc4')}
      {t('Contests.Banner.Desc5')}
    </>
  );
  return <CommonBanner image={'/image/resources/contest-banner.png'} title={t('Contests')} paragraph={paragraph} />;
};

export default Banner;
