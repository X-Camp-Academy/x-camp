import React from "react";
import { Image, Space, Typography } from "antd";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography
interface CommonBannerProps {
  image: string;
  title: string;
  paragraph: React.ReactNode;
}

const CommonBanner: React.FC<CommonBannerProps> = ({ image, title, paragraph }) => {
  return (
    <div className={styles.bannerContainer}>
      <Image
        src={image}
        alt=""
        width={"100%"}
        preview={false}
      />
      <div className={styles.content}>
        <Space direction="vertical">
          <Title className={styles.title}>
            {title}
          </Title>
          <Paragraph className={styles.paragraph}>
            {paragraph}
          </Paragraph>
        </Space>
      </div>
    </div>
  );
};

export default CommonBanner;
