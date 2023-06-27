"use client";
import React, { useEffect, useRef, useState } from "react";
import { Space, Tag, Button, Image, Typography, Row, Col } from "antd";
import styles from "./FoundingTeam.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMobile } from "@/utils";

const { Title, Paragraph, Text } = Typography;

const FoundingTeam = () => {
  const founders = [
    {
      name: "Charlie Guo",
      tags: ["Co-founder", "Principal of X-Camp Academy"],
      desc: "Charlie has been working in a large tech company for more than 10 years. He earned his PhD. in Artificial Intelligence from UCLA with more than 20 papers published in international journals and more than10 patents granted. Dr. Guo is also a founding partner of the Himalaya Angel Fund, his investment areas include big data, artificial intelligence and augmented reality.",
      bigImg: "/image/home/charlie-big.png",
      smallImg: "/image/home/yuan-small.png",
    },
    {
      name: "Yuan Xu",
      tags: ["Co-founder of X-Camp Academy"],
      desc: "Extensive experience in a revenue-critical large scale distributed system team. In the last 5 years, Yuan who led the teaching team has helped 200+ students reach USACO Silver and above, including 5 in US Training camp 2020-2022 (only around 25 contestants were selected for the US Camp).",
      bigImg: "/image/home/yuan-big.png",
      smallImg: "/image/home/charlie-small.png",
    },
  ];
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const [current, setCurrent] = useState(0);
  const [founder, setFounder] = useState(founders[current]);

  const removeAnimate = () => {
    const refs = [leftRef, rightRef];
    refs.forEach((ref) => {
      (ref?.current as HTMLDivElement)?.classList?.remove(
        styles.scaleBig,
        styles.scaleSmall
      );
    });
  };

  const onPrev = () => {
    if (current === 1) {
      removeAnimate();
      setCurrent(0);
      (leftRef?.current as HTMLDivElement)?.classList?.add(styles.scaleBig);
      (rightRef?.current as HTMLDivElement)?.classList?.add(styles.scaleSmall);
    }
  };
  const onNext = () => {
    if (current === 0) {
      removeAnimate();
      setCurrent(1);
      (leftRef?.current as HTMLDivElement)?.classList?.add(styles.scaleSmall);
      (rightRef?.current as HTMLDivElement)?.classList?.add(styles.scaleBig);
    }
  };
  useEffect(() => {
    setFounder(founders[current]);
  }, [current]);
  return (
    <div className={`${styles.FoundingTeam} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>
          Founding Team
          <Text className={styles.text}></Text>
        </Title>
        <Row>
          <Col xs={24} sm={24} md={24} lg={10}>
            <Space direction="vertical" className={styles.founderLeft}>
              <Title className={styles.name}>
                {founder.name}
                {isMobile && (
                  <Space className={styles.buttons}>
                    <Button
                      type="primary"
                      ghost={current === 0}
                      shape="circle"
                      onClick={onPrev}
                    >
                      <LeftOutlined />
                    </Button>
                    <Button
                      type="primary"
                      ghost={current !== 0}
                      shape="circle"
                      onClick={onNext}
                    >
                      <RightOutlined />
                    </Button>
                  </Space>
                )}
              </Title>

              <Space>
                {founder.tags.map((item) => {
                  return (
                    <Tag key={item} color="#FFAD11" className={styles.tags}>
                      {item}
                    </Tag>
                  );
                })}
              </Space>
              <Paragraph className={styles.paragraph}>{founder.desc}</Paragraph>
              {!isMobile && (
                <Space className={styles.buttons}>
                  <Button
                    type="primary"
                    ghost={current === 0}
                    shape="circle"
                    onClick={onPrev}
                  >
                    <LeftOutlined />
                  </Button>
                  <Button
                    type="primary"
                    ghost={current !== 0}
                    shape="circle"
                    onClick={onNext}
                  >
                    <RightOutlined />
                  </Button>
                </Space>
              )}
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={14}>
            <Space className={styles.founderRight}>
              <div ref={leftRef}>
                <Image
                  src={founder?.bigImg}
                  alt="image"
                  preview={false}
                  className={styles.bigImg}
                />
              </div>

              {!isMobile && (
                <div ref={rightRef}>
                  <Image
                    src={founder?.smallImg}
                    alt="image"
                    preview={false}
                    className={styles.smallImg}
                  />
                </div>
              )}
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default FoundingTeam;
