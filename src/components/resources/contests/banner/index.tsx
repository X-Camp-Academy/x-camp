import { useLang } from '@/hoc/with-intl/define';
import dynamic from 'next/dynamic';
import React from 'react';

const CommonBanner = dynamic(() => import('@/components/common/common-banner'));

const Banner: React.FC = () => {
  const { format: t, lang } = useLang();
  const paragraph = (
    <>
      {t('Contests.Banner.Desc1')}&nbsp;
      {t('Contests.Banner.Desc2')}&nbsp;
      {t('Contests.Banner.Desc3')}&nbsp;
      {t('Contests.Banner.Desc4')}&nbsp;
      {t('Contests.Banner.Desc5')}&nbsp;
    </>
  );
  return <CommonBanner image={'/image/resources/contest-banner.png'} title={t('Contests')} paragraph={paragraph} paragraphFontSize={16} />;
};

export default Banner;
