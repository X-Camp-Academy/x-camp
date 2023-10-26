import CommonBanner from '@/components/common/common-banner';
import { useLang } from '@/hoc/with-intl/define';
import React from 'react';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t('USACOLiveSolutions.Banner.Desc1')}
      <br />
      {t('USACOLiveSolutions.Banner.Desc2')}
      <br />
      {t('USACOLiveSolutions.Banner.Desc3')}
    </>
  );
  return <CommonBanner image={'/image/resources/usaco-live-solutions-banner.png'} title={t('USACOLiveSolution')} paragraph={paragraph} paragraphClassName={styles.paragraph} />;
};

export default Banner;
