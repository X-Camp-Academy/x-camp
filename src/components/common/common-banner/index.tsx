import { useMobile } from '@/utils';
import { Button, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

interface CommonBannerProps {
  title: string;
  paragraph: React.ReactNode;
  image: string;
  titleClassName?: string;
  paragraphClassName?: string;
  barColor?: string;
  backgroundColor?: string;
  titleStyle?: React.CSSProperties;
  paragraphStyle?: React.CSSProperties;
  time?: React.ReactNode;
  paragraphFontSize?: number;
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
  barColor,
  backgroundColor,
  titleStyle,
  paragraphStyle,
  time,
  paragraphFontSize,
  showButton,
  buttonText,
  buttonLink,
  buttonIcon
}) => {
  const isMobile = useMobile();
  const router = useRouter();
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
            <Paragraph
              className={`${paragraphClassName || styles.paragraph}`}
              style={{
                fontSize: paragraphFontSize ? paragraphFontSize : '24px'
              }}
            >
              {paragraph}
            </Paragraph>
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
