import { GetPartner, PartnerCategory } from '@/apis/strapi-client/define';
import { useGetPartner } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { RightOutlined } from '@ant-design/icons';
import { Button, Image, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;
const backgroundMap = ['#FDF6F1', '#F7F7F7', '#EFEFEF'];
const getBackgroundFromIndex = (index: number) => {
  return index > 2 ? backgroundMap[index % 3] : backgroundMap[index];
};

const Introduction: React.FC = () => {
  const { lang, format: t } = useLang();
  const { data } = useGetPartner();
  const isMobile = useMobile();
  const getTransByCategory = (category: PartnerCategory) => {
    switch (category) {
      case PartnerCategory.ChinaPartners:
        return t('ChinaPartners');
      case PartnerCategory.CommunityPartners:
        return t('CommunityPartners');
      case PartnerCategory.UniversityPartners:
        return t('UniversityPartners');
      case PartnerCategory.EducationPartners:
        return t('EducationPartners');
      default:
        return t('ChinaPartners');
    }
  };
  const handleMobileJump = (card: StrapiResponseDataItem<GetPartner>) => {
    isMobile && window.open(card?.attributes?.link);
  };
  return (
    <div className={styles.content}>
      {data?.map((items, index) => (
        <div key={index} style={{ background: getBackgroundFromIndex(index) }} className={styles.partnerContainer}>
          <div className={`${styles.partner} container`}>
            <div className={styles.title}>{getTransByCategory(items?.[0]?.attributes?.category)}</div>
            <Space direction="vertical" style={{ width: '100%' }} size={isMobile ? 24 : 60}>
              {items?.map((card) => (
                <div className={styles.card} key={card?.id} onClick={() => handleMobileJump(card)}>
                  <Image className={styles.logo} preview={false} src={card?.attributes?.logo?.data?.attributes?.url} alt="" />
                  <div className={styles.partnerContent}>
                    <Title className={styles.partnerTitle}>{getTransResult(lang, card?.attributes?.titleZh, card?.attributes?.titleEn)}</Title>
                    <Paragraph className={styles.partnerDescription} ellipsis={{ rows: 3 }}>
                      {getTransResult(lang, card?.attributes?.titleDescriptionZh, card?.attributes?.titleDescriptionEn)}
                    </Paragraph>
                    {!isMobile && (
                      <Button className={styles.button} href={card?.attributes?.link} target="_blank">
                        {t('LearnMore')}
                        <RightOutlined style={{ color: '#333333' }} />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </Space>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Introduction;
