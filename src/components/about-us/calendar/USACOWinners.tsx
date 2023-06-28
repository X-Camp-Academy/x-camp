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
import styles from "./USACOWinners.module.scss";
import React, { useRef } from "react";
import Link from "next/link";
import ColorfulCard from "@/components/common/colorful-card";
const { Title, Paragraph, Text } = Typography;

const USACOMedal: React.FC = () => {
  return (
    <>
      <div className={styles.USACOMedalContainer}>
        511 5313
        <div className={styles.listContainer}>
          adfa 32as1df 32as1df3 5as4d1f
        </div>
      </div>
    </>
  );
};

export default USACOMedal;
