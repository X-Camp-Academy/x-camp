import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('News.Banner.Desc1')}
      {t('News.Banner.Desc2')}
      {t('News.Banner.Desc3')}
    </>
  );

  return (
    <CommonBanner
      image={'/image/about-us/news-banner.png'}
      title={t('News')}
      titleStyle={{
        color: '#172142'
      }}
      paragraph={paragraph}
      paragraphStyle={{
        marginTop: 120
      }}
    />
  );
};

export default Banner;
