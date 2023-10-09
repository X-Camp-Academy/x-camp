import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const CommonBanner = dynamic(() => import('@/components/common/common-banner'));

const Banner: React.FC = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  const paragraph = (
    <>
      X-Camp will organize students to join different
      <br />
      competitive programming contests yearly. We partner
      <br />
      with distinguished contest partners from prestigious
      <br />
      universities, high schools, and NGOs, for providing
      <br />
      high-quality contest and community for students.
    </>
  );

  return (
    <CommonBanner
      image={'/image/about-us/student-recommend-banner.png'}
      title={t('Contests')}
      paragraph={paragraph}
      titleStyle={{ color: '#fff', marginTop: isMobile ? 0 : 96 }}
      paragraphClassName={styles.paragraph}
    />
  );
};

export default Banner;
