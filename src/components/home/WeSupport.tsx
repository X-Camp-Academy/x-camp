"use client";
import React, { useRef } from "react";
import { Space, Typography, Row, Col, Image, Carousel } from "antd";
import { addAnimate, removeAnimate } from "@/utils";
import styles from "./WeSupport.module.scss";

const { Title, Paragraph } = Typography;

const WeSupport: React.FC = () => {
  const images = [
    "/image/home/we-support-1.png",
    "/image/home/we-support-2.png",
    "/image/home/we-support-3.png",
    "/image/home/we-support-3.png",
  ];
  const refs = Array.from({ length: images.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLDivElement>(null)
  );
  return (
    <div className={`${styles.weSupport} container`}>
      <Row>
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
        >
          <div className={styles.video}>
            <iframe
              width="100%"
              height="350"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              title="X-Camp Academy Intro - 2023"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 11, order: 2, offset: 1 }}
        >
          <Row>
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 24, order: 1 }}
            >
              <Space size={24} direction="vertical">
                <Title className={styles.title}>We support</Title>
                <Paragraph className={styles.paragraph}>
                  {
                    "X-Camp's programming courses support the three most mainstream and popular programming languages, including Intro to Python, Intro to Java (APCS), Beginner / Intermediate / Advanced level C++, for students in grades 5-12th."
                  }
                </Paragraph>
              </Space>
            </Col>

            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              md={{ span: 24, order: 2 }}
            >
              <Carousel
                autoplay={true}
                slidesToShow={3}
                infinite={true}
                dots={false}
              >
                {images.map((item, index) => {
                  return (
                    <div
                      key={index}
                      ref={refs[index]}
                      onMouseEnter={() => addAnimate(refs[index])}
                      onMouseLeave={() => removeAnimate(refs[index])}
                      className={styles.imageBox}
                    >
                      <Image src={item} alt="image" preview={false} />
                    </div>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WeSupport;
