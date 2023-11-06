import ColorfulCard from '@/components/common/colorful-card';
import CopyRightIcons from '@/components/common/copy-right-icons';
import { useLang } from '@/hoc/with-intl/define';
import { sFormat } from '@/utils';
import { getTransResult } from '@/utils/public';
import { Card, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const ReferralAndEarn: React.FC = () => {
  const { format: t, lang } = useLang();
  return (
    <div className={`${styles.referralAndEarn} container`}>
      <ColorfulCard border="bottom" index={1} animate={false}>
        <Card className={styles.giveAndGetCard}>
          <Title className={styles.title}>{t('Refer.Title')}</Title>
          <Paragraph className={styles.description}>{t('Refer.Desc')}</Paragraph>
          <Title className={styles.subTitle}>
            {sFormat(getTransResult(lang, `${t('ForYouAnd')}${t('ForYourFriend')}`, `${t('Earn')} {0} ${t('ForYouAnd')} {1} ${t('ForYourFriend')}`), <span>$75</span>, <span>$75</span>)}
          </Title>
          <CopyRightIcons />
        </Card>
      </ColorfulCard>
    </div>
  );
};

export default ReferralAndEarn;
