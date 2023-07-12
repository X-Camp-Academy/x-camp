import React from "react";
import styles from "./index.module.scss";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Typography,
  Descriptions,
  Divider,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { useMobile } from "@/utils";
import { SearchOutlined } from "@ant-design/icons";
import { ScheduleData } from "../schedule-table";
import { useLang } from "@/hoc/with-intl/define";
const { Text, Title } = Typography;

const CourseCard: React.FC<ScheduleData> = ({ ...props }: ScheduleData) => {
  const { format: t } = useLang();
  return (
    <>
      <Row className={styles.row}>
        <Col sm={24} lg={12} className={styles.col}>
          <Title className={styles.title}>
            {props.class}:{props.courseTitle}
          </Title>
        </Col>
        <Col
          sm={24}
          lg={12}
          className={`${styles.col} ${styles.feeCol}`}
          style={{}}
        >
          <Title className={styles.title}>{"10 Weeks"}</Title>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }} className={styles.row}>
        <Col lg={12} className={styles.col}>
          <Descriptions column={1}>
            <Descriptions.Item label={t("CourseStyle")}>
              {props.style}
            </Descriptions.Item>
            <Descriptions.Item label={t("Level")}>
              {props.level}
            </Descriptions.Item>
            <Descriptions.Item label={t("Language")}>
              {props.language}
            </Descriptions.Item>
            <Descriptions.Item label={t("ClassesTime")}>
              {props.time}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col
          lg={12}
          className={styles.col}
          style={{ justifyContent: "flex-end" }}
        >
          <Text className={styles.fee}>{props.fee}</Text>
        </Col>
      </Row>
      <Divider style={{ marginTop: 35 }} />
    </>
  );
};

export default CourseCard;
