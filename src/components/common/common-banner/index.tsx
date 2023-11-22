import { useMobile } from '@/utils';
import { Button, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

interface CommonBannerProps {
  title: string;
  paragraph: React.ReactNode;
  image: string;
  time?: React.ReactNode;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonIcon?: React.ReactNode;
}

const CommonBanner: React.FC<CommonBannerProps> = ({ title, paragraph, image, time, showButton, buttonText, buttonLink, buttonIcon }) => {
  const isMobile = useMobile();
  return (
    <>
      {isMobile ? (
        <div
          className={styles.mbContainer}
          style={{
            background: `url('${image}') no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          <Space direction="vertical" className={styles.space}>
            <Title className={`${styles.title}`}>{title}</Title>
            <Paragraph className={`${styles.paragraph}`}>{paragraph}</Paragraph>
          </Space>
        </div>
      ) : (
        <div className={styles.bannerContainer}>
          <div className={`${styles.row} container`}>
            <Title className={`${styles.title}`}>{title}</Title>
            {time && <div className={styles.time}>{time}</div>}
            <Paragraph className={`${styles.paragraph}`}>{paragraph}</Paragraph>
            {showButton && (
              <div className={styles.buttonContainer}>
                <Button
                  size="large"
                  className={styles.contactBtn}
                  onClick={() => {
                    window.open(buttonLink);
                  }}
                >
                  <span>{buttonText}</span>
                  {buttonIcon}
                </Button>
              </div>
            )}
          </div>
          <div className={styles.background} style={{ backgroundImage: `url('${image}')` }} />
        </div>
      )}
    </>
  );
};

export default CommonBanner;
