"use client";
import React from "react";
import { Input, Select, Form, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { useMobile } from "@/utils";
import styles from "./FilterForm.module.scss";

const { RangePicker } = DatePicker;

const FilterForm: React.FC = () => {
  const { format: t } = useLang();
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
      initialValues={{
        language: "python"
      }}
    >
      <Form.Item name="language">
        <Select
          className={styles.formSelect}
          options={options}
        />
      </Form.Item>

      <Form.Item name="time" style={isMobile ? { width: 120 } : {}}>
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <Input
          placeholder={t("Search")}
          onPressEnter={onSearch}
          suffix={<SearchOutlined style={{ color: "#d9d9d9" }} />}
        />
      </Form.Item>
    </Form>
  );
};

export default FilterForm;
