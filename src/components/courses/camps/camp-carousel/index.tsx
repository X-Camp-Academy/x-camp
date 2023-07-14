import React, { useRef } from 'react';
import styles from './index.module.scss';
import { Button, Carousel, Col, Row, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';

const CampCarousel = () => {
  const ref = useRef<CarouselRef>(null);
  return (
    <div className={styles.campCarousel}>
      <div className={`${styles.content} container`}>
        <Button
          type="primary"
          shape="circle"
          className={styles.prev}
          onClick={() => {
            ref?.current?.prev();
          }}
        >
          <LeftOutlined />
        </Button>
        <Carousel dots={false} autoplay={false} ref={ref}>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div key={item}>
                <Row gutter={40} justify="center" align="middle">
                  {[1, 2, 3].map((item) => {
                    return (
                      <Col key={item} xs={24} sm={24} md={12} lg={8}>
                        <img
                          src="/image/about-us/introduction/top-banner.png"
                          alt=""
                        ></img>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            );
          })}
        </Carousel>
        <Button
          type="primary"
          shape="circle"
          className={styles.next}
          onClick={() => {
            ref?.current?.next();
          }}
        >
          <RightOutlined style={{ color: '#D46B14' }} />
        </Button>
      </div>
    </div>
  );
};

export default CampCarousel;
