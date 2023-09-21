import React from 'react';
import { Image, Space, Typography } from 'antd';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;
interface CommonBannerProps {
  image: string;
  title: string;
  paragraph: React.ReactNode;
  paragraphClassName?: string;
  titleClassName?: string;
}

const CommonBanner: React.FC<CommonBannerProps> = ({ image, title, paragraph, paragraphClassName, titleClassName }) => {
  return (
    <div className={styles.bannerContainer}>
      <Image
        src={image}
        alt=""
        width={'100%'}
        className={styles.image}
        preview={false}
      />
      <div className={styles.content}>
        <Space direction="vertical">
          <Title className={titleClassName || styles.title}>
            {title}
          </Title>
          <Paragraph className={`${paragraphClassName || styles.paragraph}`} ellipsis={{ rows: 6 }}>
            {paragraph}
          </Paragraph>
        </Space>
      </div>
    </div>
  );
};

export default CommonBanner;
