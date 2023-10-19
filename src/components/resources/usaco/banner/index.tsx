import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();

  const paragraph = (
    <>
      The first-ever, and most comprehensive live problem-solving
      <br />
      broadcast on the entire web, only in X-Camp.
    </>
  );
  return (
    <div className={styles.bannerContainer}>
      <CommonBanner image={'/image/resources/usaco-banner.png'} title={'USACO'} paragraph={paragraph} />
    </div>
  );
};

export default Banner;
