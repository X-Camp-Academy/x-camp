import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/navigation';

const { Title, Paragraph, Text } = Typography;
const Banner: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const router = useRouter();
  const list = [t('USACO.Pain.Points1'), t('USACO.Pain.Points2'), t('USACO.Pain.Points3'), t('USACO.Pain.Points4'), t('USACO.Pain.Points5'), t('USACO.Pain.Points6'), t('USACO.Pain.Points7')];
  return (
    <div className={`${styles.painPointsContainer} container`}>
      <ColorfulCard border="bottom" index={1} className={styles.colorfulCard}>
        <Space direction="vertical" className={styles.space}>
          <Title className={styles.title}>{t('USACO.Pain.Points')}</Title>
          <Space direction="vertical" className={styles.list}>
            {list?.map((item) => (
              <Space key={item} align={isMobile ? 'baseline' : 'center'}>
                <div className={styles.circle} />
                <Text className={styles.text}>{item}</Text>
              </Space>
            ))}
          </Space>

          <Paragraph className={styles.paragraph}>{t('USACO.Pain.Points.Desc')}</Paragraph>

          <a
            href="/courses/all-classes/#camps"
            className={styles.inPersonCamps}
          >
            In Person Camps
          </a>
        </Space>
      </ColorfulCard>
    </div>
  );
};

export default Banner;
