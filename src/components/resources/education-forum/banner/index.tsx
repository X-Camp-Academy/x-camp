import { useLang } from '@/hoc/with-intl/define';
import dynamic from 'next/dynamic';
import React from 'react';

const CommonBanner = dynamic(() => import('@/components/common/common-banner'));

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('EducationForum.Banner.Desc1')}
      {t('EducationForum.Banner.Desc2')}
      {t('EducationForum.Banner.Desc3')}
      {t('EducationForum.Banner.Desc4')}
      {t('EducationForum.Banner.Desc5')}
    </>
  );

  return <CommonBanner image={'/image/resources/education-forum-banner.png'} title={t('EducationForum')} paragraph={paragraph} />;
};

export default Banner;
