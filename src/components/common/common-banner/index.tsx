import { useMobile } from '@/utils';
import { Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
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
}

const Banner: React.FC<CommonBannerProps> = ({ title, paragraph, image, titleClassName, paragraphClassName, barColor, backgroundColor, titleStyle, paragraphStyle, time, paragraphFontSize }) => {
  const isMobile = useMobile();
  const [bgImgRight, setBgImgRight] = useState('100%');

  useEffect(() => {
    if (window.innerWidth >= 1400) {
      setBgImgRight('0');
    } else if (window.innerWidth >= 1200) {
      setBgImgRight('-10%');
    } else if (window.innerWidth >= 992) {
      setBgImgRight('-15%');
    } else if (window.innerWidth >= 768) {
      setBgImgRight('-20%');
    } else if (window.innerWidth >= 576) {
      setBgImgRight('-25%');
    } else {
      setBgImgRight('-30%');
    }
  }, [window.innerWidth]);
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
        /*         <Row className={styles.row}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                    <Space direction="vertical" size={16} className={styles.leftSpace} style={{ backgroundColor }}>
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
                    </Space>
                    <div className={styles.background} style={{ backgroundColor: barColor }} />
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                    <img alt="img" src={image} className={styles.image} />
                  </Col>
                </Row> */
        <div
          className={styles.bannerContainer}
          style={{
            background: `url('${image}') no-repeat`,
            // eslint-disable-next-line quotes
            backgroundPosition: `top 0 right ${bgImgRight}`
          }}
        >
          <div className={`${styles.row} container`}>
            <Space direction="vertical" size={16} className={styles.leftSpace} style={{ backgroundColor }}>
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
            </Space>
          </div>
          {/* <div className={styles.background} style={{ backgroundColor: barColor }} /> */}
        </div>
      )}
    </>
  );
};

export default Banner;
