import {
  Space,
  Row,
  Col,
  Card,
  Image,
  Typography,
  Carousel,
  Button,
  List,
} from "antd";
import { CarouselRef } from "antd/es/carousel";
import {
  LeftCircleTwoTone,
  RightCircleTwoTone,
  setTwoToneColor,
} from "@ant-design/icons";
import React, { useRef } from "react";
import Link from "next/link";
import ColorfulCard from "@/components/common/colorful-card";
const { Title, Paragraph, Text } = Typography;
import styles from "./CalendarContent.module.scss";

const CalendarContent: React.FC = () => {
  return (
    <>
      <div className={styles.calendarContent}>
        <div className={`${styles.calendarContainer} container`}>
          <Title className={styles.title}>2023 X-Camp Calendar</Title>
          <div className={styles.listContainer}>
            adfa 32as1df 32as1df3 5as4d1f
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarContent;
