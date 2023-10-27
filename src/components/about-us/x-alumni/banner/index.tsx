import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('XAlumni.Banner.Desc1')}
      {t('XAlumni.Banner.Desc2')}
      {t('XAlumni.Banner.Desc3')}
    </>
  );

  return <CommonBanner image={'/image/about-us/x-alumni-banner.png'} title={t('XAlumni')} paragraph={paragraph} />;
};

export default Banner;
