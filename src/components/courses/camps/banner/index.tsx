import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('Camp.Des')}
      <br />
      <span>{t('SummerCamp')}</span>
      <br />
      <span>{t('WinterCamp')}</span>
    </>
  );

  return <CommonBanner image={'/image/courses/camps-banner.png'} title={t('In-personCamps')} paragraph={paragraph} />;
};

export default Banner;
