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
  Pagination,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { useMobile } from "@/utils";
import { SearchOutlined } from "@ant-design/icons";
import CourseCard from "../course-card";
import { useLang } from "@/hoc/with-intl/define";
const { Text } = Typography;
export interface ScheduleData {
  class: string;
  level: string;
  language: string;
  courseTitle: string;
  grade: string;
  style: string;
  date: string;
  lessons: number;
  time: string;
  fee: string;
}
const ScheduleTable = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  const data: ScheduleData[] = [
    {
      class: "CS100P",
      level: "Beginner (<1 year)",
      language: "Python",
      courseTitle: "Fall in Love with Coding",
      grade: "6th+ graders",
      style: "Online Live",
      date: "Saturdays 11:00am-1:00pm",
      lessons: 12,
      time: "08/26/2023 05/11/2023",
      fee: "$1,345.00",
    },
    {
      class: "CS100P",
      level: "Beginner (<1 year)",
      language: "Python",
      courseTitle: "Fall in Love with Coding",
      grade: "6th+ graders",
      style: "Online Live",
      date: "Saturdays 11:00am-1:00pm",
      lessons: 12,
      time: "08/26/2023 05/11/2023",
      fee: "$1,345.00",
    },
    {
      class: "CS100P",
      level: "Beginner (<1 year)",
      language: "Python",
      courseTitle: "Fall in Love with Coding",
      grade: "6th+ graders",
      style: "Online Live",
      date: "Saturdays 11:00am-1:00pm",
      lessons: 12,
      time: "08/26/2023 05/11/2023",
      fee: "$1,345.00",
    },
    {
      class: "CS100P",
      level: "Beginner (<1 year)",
      language: "Python",

      courseTitle: "Fall in Love with Coding",
      grade: "6th+ graders",
      style: "Online Live",
      date: "Saturdays 11:00am-1:00pm",
      lessons: 12,
      time: "08/26/2023 05/11/2023",
      fee: "$1,345.00",
    },
  ];
  /* const columns: ColumnsType<ScheduleData> = [
    {
      title: 'Class',
      key: 'class',
      dataIndex: 'class',
    },
    {
      title: 'Course Title',
      key: 'courseTitle',
      dataIndex: 'courseTitle',
      render: (courseTitle: string) => {
        return (
          <span style={{ color: '#D46B14', textDecoration: 'underline' }}>
            {courseTitle}
          </span>
        );
      },
    },
    {
      title: 'Grade',
      key: 'grade',
      dataIndex: 'grade',
    },
    {
      title: 'Style',
      key: 'style',
      dataIndex: 'style',
    },
    {
      title: 'Date And Time',
      key: 'date',
      dataIndex: 'date',
    },
    {
      title: 'Lessons',
      key: 'lessons',
      dataIndex: 'lessons',
    },
    {
      title: 'Start End Time',
      key: 'time',
      dataIndex: 'time',
    },
    {
      title: 'Fee',
      key: 'fee',
      dataIndex: 'fee',
    },
  ]; */
  return (
    <div className={styles.scheduleTable}>
      <div className={"container"}>
        <Form layout={"inline"}>
          <Row style={{ width: "100%" }} gutter={[18, 0]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} className={styles.col}>
              <Form.Item name={"courseMode"} colon={false}>
                <Space direction="horizontal" align="baseline">
                  <Text className={styles.search}>Course Mode:</Text>
                  <Select placeholder={"Show All"} className={styles.select} />
                </Space>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} className={styles.col}>
              <Form.Item name={"courseLevel"} colon={false}>
                <Space direction="horizontal" align="baseline">
                  <Text className={styles.search}>Course Level:</Text>
                  <Select placeholder={"Show All"} className={styles.select} />
                </Space>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={5} className={styles.col}>
              <Form.Item name={"quarter"} colon={false}>
                <Space direction="horizontal" align="baseline">
                  <Text className={styles.search}>Quarter:</Text>
                  <Select placeholder={"Show All"} className={styles.select} />
                </Space>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={3} className={styles.col}>
              <Form.Item name={"searchCourse"} colon={false}>
                <Input
                  className={styles.select}
                  suffix={<SearchOutlined />}
                  placeholder="Search"
                />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={4}
              style={{ marginTop: isMobile ? "20px" : "auto" }}
              className={styles.col}
            >
              <Form.Item>
                <Button
                  type={"primary"}
                  htmlType={"submit"}
                  className={styles.button}
                >
                  {t("Search")}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {/* <Table
          className={styles.table}
          dataSource={data}
          scroll={{ x: 'max-content' }}
          columns={columns}
          rowKey={'title'}
        /> */}
        <div style={{ marginTop: 35 }}>
          {data.map((item, index) => {
            return <CourseCard {...item} key={index} />;
          })}
        </div>
        <Pagination
          defaultCurrent={6}
          total={10}
          style={{ textAlign: "center", marginTop: "56px" }}
        />
      </div>
    </div>
  );
};

export default ScheduleTable;
