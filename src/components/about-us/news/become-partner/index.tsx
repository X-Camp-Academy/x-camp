import React from 'react';
import { Space, Typography, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const BecomePartner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.becomePartnerContainer}>
      <div className={`${styles.becomePartner} container`}>
        <ColorfulCard border={'bottom'} index={0} animate={false}>
          <Space direction="vertical" className={styles.content}>
            <Title className={styles.title}>{t('BecomeOurPartner')}</Title>
            <Paragraph className={styles.description}>
              {t('BecomeOurPartner.Desc')}
            </Paragraph>
            <a href={'mailto:info@x-camp.academy'}>
              <Button className={styles.contactBtn}>
                {t('JoinUs')}
                <EditOutlined />
              </Button>
            </a>
          </Space>
        </ColorfulCard>
      </div>
    </div>
  );
};

export default BecomePartner;
