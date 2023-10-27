import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
  const paragraph = (
    <>
      {t('JoinUs.Banner.Desc1')}
      {t('JoinUs.Banner.Desc2')}
    </>
  );
  return (
    <div className={styles.bannerContainer}>
      <CommonBanner image={'/image/about-us/banner-joinUs.png'} title={t('Careers')} paragraph={paragraph} paragraphClassName={styles.paragraph} />
      <Button
        size="large"
        className={styles.contactBtn}
        onClick={() => {
          router.push('/about-us/contact-us');
        }}
      >
        {t('ContactUs')}
        <img src="/image/about-us/comment.png" alt="" />
      </Button>
    </div>
  );
};

export default Banner;
