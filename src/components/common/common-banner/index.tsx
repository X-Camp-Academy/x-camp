import { useMobile } from '@/utils';
import { Button, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

interface CommonBannerProps {
  title: string;
  paragraph: React.ReactNode;
  image: string;
  titleClassName?: string;
  paragraphClassName?: string;
  backgroundColor?: string;
  titleStyle?: React.CSSProperties;
  paragraphStyle?: React.CSSProperties;
  time?: React.ReactNode;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonIcon?: React.ReactNode;
}

const Banner: React.FC<CommonBannerProps> = ({
  title,
  paragraph,
  image,
  titleClassName,
  paragraphClassName,
  backgroundColor,
  titleStyle,
  paragraphStyle,
  time,
  showButton,
  buttonText,
  buttonLink,
  buttonIcon
}) => {
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
          <Space direction="vertical" className={styles.space} style={{ backgroundColor }}>
            <Title className={`${titleClassName || styles.title}`} style={titleStyle}>
              {title}
            </Title>
            <Paragraph className={`${paragraphClassName || styles.paragraph}`} style={paragraphStyle}>
              {paragraph}
            </Paragraph>
          </Space>
        </div>
      ) : (
        <div className={styles.bannerContainer}>
          <div className={`${styles.row} container`}>
            <Title className={`${titleClassName || styles.title}`}>{title}</Title>
            {time && <div className={styles.time}>{time}</div>}
            <Paragraph className={`${paragraphClassName || styles.paragraph}`}>{paragraph}</Paragraph>
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

export default Banner;
