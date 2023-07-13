import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import {
  Button,
  Col,
  Input,
  Row,
  Select,
  Space,
  Typography,
  Pagination,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { useMobile } from "@/utils";
import CourseCard from "../course-card";
import {
  useGetCourses,
} from "@/apis/strapi-client/strapi";

const { Text } = Typography;

const ScheduleTable = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  const defaultPagination = { page: 1, pageSize: 10 };
  const [pagination, setPagination] = useState(defaultPagination);
  const [filters, setFilters] = useState<
    | { [key: string]: string | { $eq: string } }
    | { [key: string]: string | { type: { $eq: string } } }
  >({});

  const { data: courses, runAsync } = useGetCourses({});

  const onChange = (page: number, pageSize: number) => {
    const newPagination = {
      page,
      pageSize,
    };
    setPagination(newPagination);
  };
  useEffect(() => {
    runAsync({
      populate: "*",
      sort: ["order:desc"],
      filters: { ...filters },
      pagination: { ...pagination },
    });
  }, [pagination, filters]);

  const selectItems = [
    {
      span: 5,
      name: "classMode",
      text: "Class Mode:",
      options: [
        {
          label: "Show All",
          value: "",
        },
        {
          label: "Online Live",
          value: "Online Live",
        },
        {
          label: "In-person",
          value: "In-person",
        },
      ],
    },
    {
      span: 7,
      name: "courseLevelType",
      text: "Course Level Type:",
      options: [
        {
          label: "Show All",
          value: "",
        },
        {
          label: "Python",
          value: "Python",
        },
        {
          label: "USACO Bronze Knowledge",
          value: "USACO Bronze Knowledge",
        },
        {
          label: "USACO Silver Knowledge",
          value: "USACO Silver Knowledge",
        },
        {
          label: "USACO Grandmaster Classes",
          value: "USACO Grandmaster Classes",
        },
        {
          label: "APCS Classes",
          value: "APCS Classes",
        },
        {
          label: "USACO Enhancement Classes",
          value: "USACO Enhancement Classes",
        },
        {
          label: "100 Problem Challenge",
          value: "100 Problem Challenge",
        },
        {
          label: "Bilingual Classes",
          value: "Bilingual Classes",
        },
      ],
    },
    {
      span: 5,
      name: "schoolQuarter",
      text: "School Quarter:",
      options: [
        {
          label: "Show All",
          value: "",
        },
        {
          label: "Spring",
          value: "Spring",
        },
        {
          label: "Summer",
          value: "Summer",
        },
        {
          label: "Fall",
          value: "Fall",
        },
        {
          label: "Winter",
          value: "Winter",
        },
      ],
    },
  ];
  const onSelectChange = (value: string, name: string) => {
    const newFilters = { ...filters };
    if (value !== "") {
      if (name === "courseLevelType") {
        const relations = {
          type: {
            $eq: value,
          },
        };
        newFilters[name] = relations;
      } else {
        newFilters[name] = { $eq: value };
      }
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
    setPagination(defaultPagination);
  };
  return (
    <div className={styles.scheduleTable}>
      <div className={"container"}>
        <Row>
          {selectItems?.map((selectItem, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={selectItem?.span}
              className={styles.col}
            >
              <Space align="center">
                <Text className={styles.text}>{selectItem?.text}</Text>
                <Select
                  placeholder={"Show All"}
                  className={styles.select}
                  style={selectItem?.span === 7 ? { width: 200 } : {}}
                  options={selectItem?.options}
                  onChange={(value) => onSelectChange(value, selectItem?.name)}
                />
              </Space>
            </Col>
          ))}

          <Col xs={24} sm={24} md={24} lg={7} className={styles.col}>
            <Space>
              <Input
                suffix={<SearchOutlined />}
                className={styles.search}
                placeholder="Search"
              />
              <Button
                type={"primary"}
                htmlType={"submit"}
                className={styles.button}
              >
                {t("Search")}
              </Button>
            </Space>
          </Col>
        </Row>

        <div style={{ marginTop: 35 }}>
          {courses?.data?.map((item) => {
            return <CourseCard {...item?.attributes} key={item?.id} />;
          })}
        </div>
        <Pagination
          onChange={onChange}
          current={pagination?.page}
          pageSize={pagination?.pageSize}
          total={courses?.meta?.pagination?.total}
          showSizeChanger={true}
          style={{ textAlign: "center", marginTop: "56px" }}
        />
      </div>
    </div>
  );
};

export default ScheduleTable;
