import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import { CommentOutlined } from '@ant-design/icons';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('JoinUs.Banner.Desc1')}
      {t('JoinUs.Banner.Desc2')}
    </>
  );
  return (
    <CommonBanner
      image={'/image/about-us/banner-joinUs.png'}
      title={t('Careers')}
      paragraph={paragraph}
      showButton
      buttonIcon={<CommentOutlined />}
      buttonText={t('ContactUs')}
      buttonLink={'/about-us/contact-us'}
    />
  );
};

export default Banner;
