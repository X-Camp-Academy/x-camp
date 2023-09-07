"use client";
import React from "react";
import { Space, Typography, Row, Col, Image } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { useMobile } from "@/utils";
import AnimateBox from "../common/animate-box";
import styles from "./WeSupport.module.scss";

const { Title, Paragraph, Text } = Typography;

const WeSupport: React.FC = () => {
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  const images = [
    "/image/home/python.png",
    "/image/home/java.png",
    "/image/home/c++.png",
  ];

  return (
    <div style={{ background: '#EFEFEF' }}>
      <div className={`${styles.weSupport} container`}>
        <Row>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 24, order: 2 }}
            lg={{ span: 12, order: 1 }}
          >
            <iframe src="https://media.strapi.turingstar.com.cn/production/2023/7/20230726_162259_bac67c1a78.mp4?autoplay=0" width="100%" height="100%" />
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 24, order: 1 }}
            lg={{ span: 11, order: 2, offset: 1 }}
          >
            <Row>
              <Col
                xs={{ span: 24, order: 2 }}
                sm={{ span: 24, order: 2 }}
                md={{ span: 24, order: 2 }}
                lg={{ span: 24, order: 1 }}
              >
                { lang === 'zh' ? <Title className={styles.title}>我们支持</Title> : <div>
                  <Title className={styles.title}>We <span>Support</span></Title>
                  <Text className={styles.titleBg} />
                                                                                 </div> }
                <Paragraph className={styles.paragraph}>
                  {t("WeSupport.Desc")}
                </Paragraph>
              </Col>

              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 24, order: 1 }}
                md={{ span: 24, order: 1 }}
                lg={{ span: 24, order: 2 }}
              >
                <Space direction="horizontal" size={isMobile ? 8 : 48}>
                  {images?.map((item, index) => {
                      return (
                        <div key={index} >
                          <AnimateBox className={styles.imageBox}>
                            <Image src={item} alt="image" preview={false} />
                          </AnimateBox>
                        </div>
                      );
                    })}
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default WeSupport;
