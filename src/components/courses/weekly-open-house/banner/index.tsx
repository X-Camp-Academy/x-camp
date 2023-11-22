import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { LaptopOutlined } from '@ant-design/icons';
import React from 'react';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const paragraph = (
    <>
      {t('WeeklyOpenHouse.Banner.Desc1')}
      {t('WeeklyOpenHouse.Banner.Desc2')}
    </>
  );
  return (
    <CommonBanner
      image={'/image/resources/weekly-open-house-banner.png'}
      title={t('WeeklyOpenHouse1')}
      paragraph={paragraph}
      paragraphStyle={
        isMobile
          ? undefined
          : {
            marginTop: 10
          }
      }
      time={
        <>
          {t('WeeklyOpenHouse.Banner.Date1')}
          <br />
          {t('WeeklyOpenHouse.Banner.Date2')}
        </>
      }
      showButton
      buttonText={t('ZoomLink')}
      buttonLink={'https://app.zoom.us/wc/89284761432/start?from='}
      buttonIcon={<LaptopOutlined />}
    />
  );
};

export default Banner;
