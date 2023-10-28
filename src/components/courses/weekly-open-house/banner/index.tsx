import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { LaptopOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const router = useRouter();
  const paragraph = (
    <>
      {t('WeeklyOpenHouse.Banner.Desc1')}
      {t('WeeklyOpenHouse.Banner.Desc2')}
    </>
  );
  return (
    <div className={styles.banner}>
      <CommonBanner
        image={'/image/resources/weekly-open-house-banner.png'}
        title={t('WeeklyOpenHouse1')}
        paragraph={paragraph}
        paragraphFontSize={23}
        paragraphStyle={
          isMobile
            ? undefined
            : {
              marginTop: 10
            }
        }
        time={
          <>
            {t('Home.Banner1.Date1')}
            <br />
            {t('Home.Banner1.Date1')}
          </>
        }
      />
      <div className={styles.bottomInfo}>
        <Button
          size="large"
          className={styles.contactBtn}
          onClick={() => {
            router.push('/about-us/contact-us');
          }}
        >
          <span>{t('ZoomLink')}</span>
          <LaptopOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
