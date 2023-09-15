import React, { useRef } from "react";
import { Button, Carousel } from "antd";
import styles from "@/components/common/faculty/index.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";

interface IProps {
	children: React.ReactNode
}
const CarouselWithButton: React.FC<IProps> = ({ children }:IProps) => {
  const carouselRef = useRef<CarouselRef>(null);
  const onPrev = () => {
    carouselRef?.current?.prev();
  };
  const onNext = () => {
    carouselRef?.current?.next();
  };
  return (
    <div style={{ margin: `0 45px` }}>
      <Button
        type="primary"
        shape="circle"
        className={styles.prev}
        onClick={onPrev}
      >
        <LeftOutlined />
      </Button>
      <Button
        type="primary"
        shape="circle"
        className={styles.next}
        onClick={onNext}
      >
        <RightOutlined />
      </Button>
      <Carousel
        ref={carouselRef}
        slidesToShow={3}
        slidesToScroll={1}
        swipeToSlide
        infinite
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        dots={false}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselWithButton;