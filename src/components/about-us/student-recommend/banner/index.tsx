import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('ReferralProgram.Banner.Desc1')}

      {t('ReferralProgram.Banner.Desc2')}

      {t('ReferralProgram.Banner.Desc3')}
    </>
  );

  return <CommonBanner image={'/image/about-us/student-recommend-banner.png'} title={t('ReferralProgram')} paragraph={paragraph} />;
};

export default Banner;
