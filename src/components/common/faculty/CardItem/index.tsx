import React from 'react';
import styles from '@/components/common/faculty/index.module.scss';
import { Card, Image, Space, Typography } from 'antd';
import { getTransResult } from '@/utils/public';
import Link from 'next/link';
import { RightOutlined } from '@ant-design/icons';
import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';

const { Paragraph } = Typography;

export interface IItem {
	id: number,
	attributes: {
		titleZh: string,
		titleEn: string,
		imgUrl: string,
		descriptionEn: string,
		descriptionZh: string
		[key: string]: any
	},
}

interface IProps {
	item: IItem,
	index: number,

}

const CardItem: React.FC<IProps> = ({ item, index }: IProps) => {
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  return (<ColorfulCard
    key={item?.id}
    border={'bottom'}
    index={index}
    className={`${styles.cardContainer} ${isMobile ? styles.mobile: ''}`}
  >
    <Card bodyStyle={isMobile ? { width: 265 } : undefined}>
      <Space align="center">
        <Space direction="vertical">
          <Paragraph
            ellipsis={{ rows: 1 }}
            className={styles.name}
          >
            {getTransResult(
              lang,
              item?.attributes?.titleZh,
              item?.attributes?.titleEn
            )}
          </Paragraph>
          <Paragraph
            ellipsis={{ rows: 3 }}
            className={styles.description}
          >
            {getTransResult(
              lang,
              item?.attributes?.descriptionZh,
              item?.attributes?.descriptionEn
            )}
          </Paragraph>
          <Link href="/" className={styles.more}>
            {t('More')} <RightOutlined />
          </Link>
        </Space>
        <Image
          src={item?.attributes?.imgUrl}
          alt="avatar"
          preview={false}
          className={styles.cardImage}
        />
      </Space>
    </Card>
  </ColorfulCard>);
};

export default CardItem;