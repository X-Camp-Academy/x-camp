import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import { YoutubeOutlined } from '@ant-design/icons';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('USACOLiveSolutions.Banner.Desc1')}
      {t('USACOLiveSolutions.Banner.Desc2')}
      {t('USACOLiveSolutions.Banner.Desc3')}
    </>
  );
  return (
    <CommonBanner
      image={'/image/resources/usaco-live-solutions-banner.png'}
      title={t('USACOLiveSolution')}
      paragraph={paragraph}
      showButton
      buttonIcon={<YoutubeOutlined />}
      buttonText={'Check out Youtube'}
      buttonLink={'https://www.youtube.com/@xcampacademy'}
    />
  );
};

export default Banner;
