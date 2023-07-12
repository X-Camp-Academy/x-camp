"use client";
import React from "react";
import { Space, Image, Typography, Button, Input, Select, Form } from "antd";
import styles from "./FilterForm.module.scss";
import { useMobile } from "@/utils";
import { SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const FilterForm: React.FC = () => {
  const isMobile = useMobile();
  const options = [
    {
      label: "Python",
      value: "python",
    },
    {
      label: "C++",
      value: "c++",
    },
    {
      label: "Java",
      value: "java",
    },
  ];
  const onFinish = () => {};

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => console.log(e);
  return (
    <Form
      name="basic"
      className={styles.form}
      onFinish={onFinish}
      layout="inline"
    >
      <Form.Item
        name="language"
        rules={[
          {
            required: true,
            message: "Please select code language",
          },
        ]}
      >
        <Select
          defaultValue="python"
          className={styles.formSelect}
          options={options}
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input child's grade!",
          },
        ]}
        style={isMobile ? { width: 120 } : {}}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <Input
          placeholder="Search"
          onPressEnter={onSearch}
          suffix={<SearchOutlined style={{ color: "#d9d9d9" }} />}
        />
      </Form.Item>
    </Form>
  );
};

export default FilterForm;
