import { GetAboutUsJoinUs } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { BranchesOutlined, ClockCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import { Button, Card, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.scss';

const { Title, Text } = Typography;

interface JobCardHeaderProps {
  data: StrapiResponseDataItem<GetAboutUsJoinUs> | undefined;
  showExpandBtn?: boolean;
}

const JobCardHeader: React.FC<JobCardHeaderProps> = ({ data, showExpandBtn = true }) => {
  const { lang, format: t } = useLang();
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const isMobile = useMobile();
  return (
    <Card className={styles.cardContainer} bodyStyle={{ padding: 0 }} style={isExpand ? { borderRadius: '8px 8px 0 0' } : { borderRadius: 8 }} onClick={() => setIsExpand(!isExpand)}>
      <Row>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Title className={styles.jobCardTitle}>{getTransResult(lang, data?.attributes?.titleZh, data?.attributes?.titleEn)}</Title>
          {showExpandBtn && <Button className={`${styles.expandBtn} ${isExpand ? styles.expandIcon : ''}`} icon={<DownCircleOutlined />} />}
        </div>
      </Row>
      <Row>
        <Text className={styles.jobCardDescription}>{getTransResult(lang, data?.attributes?.descriptionZh, data?.attributes?.descriptionEn)}</Text>
      </Row>
      <Row>
        <Space direction="horizontal" align="center" className={styles.iconsButtonRow}>
          <div className={styles.iconBox}>
            <div>
              <ClockCircleOutlined style={{ color: '#666666' }} />
              <Text className={styles.iconText}>{data?.attributes?.category}</Text>
            </div>
            <div style={{ marginLeft: isMobile ? 0 : 20 }}>
              <BranchesOutlined style={{ color: '#666666' }} />
              <Text className={styles.iconText}>{data?.attributes?.place}</Text>
            </div>
            {isMobile && (
              <div>
                {showExpandBtn && (
                  <Link className={styles.applyBtn} href={`/about-us/join-us/submit-resume/${data?.id}`} onClick={(e) => e.stopPropagation()}>
                    {t('ApplyNow')}
                  </Link>
                )}
              </div>
            )}
          </div>
          {!isMobile && showExpandBtn && (
            <Link className={styles.applyBtn} href={`/about-us/join-us/submit-resume/${data?.id}`} onClick={(e) => e.stopPropagation()}>
              {t('ApplyNow')}
            </Link>
          )}
        </Space>
      </Row>
    </Card>
  );
};

export default JobCardHeader;
