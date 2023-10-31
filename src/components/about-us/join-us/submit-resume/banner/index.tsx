import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import { CommentOutlined } from '@ant-design/icons';
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
    <div className={styles.topBannerContainer}>
      <CommonBanner
        image={'/image/about-us/banner-joinUs.png'}
        title={t('Careers')}
        titleClassName={styles.title}
        paragraphClassName={styles.paragraph}
        paragraph={paragraph}
        showButton
        buttonIcon={<CommentOutlined />}
        buttonText={t('ContactUs')}
        buttonLink={'/about-us/contact-us'}
      />
    </div>
  );
};

export default Banner;
