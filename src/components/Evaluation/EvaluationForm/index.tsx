"use client";
import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import styles from "./index.module.scss";
import { useLang } from "@/hoc/with-intl/define";

interface EvaluationFormProps {
  stuName: string;
  Email: string;
  phoneNumber: string;
  grade: string;
  codingBackground: string;
  codingLanguage: string;
  programmingExp: string;
  aboutXcamp: string;
}

const EvaluationForm: React.FC = () => {
  const { lang, format: t } = useLang();
  const [form] = Form.useForm();
  const submitEmailValue = (value: EvaluationFormProps) => {
    const requestData = new FormData();
    requestData.append("stuName", value.stuName);
    requestData.append("Email", value.Email);
    requestData.append("phoneNumber", value.phoneNumber);
    requestData.append("grade", value.grade);
    requestData.append("codingBackground", value.codingBackground);
    requestData.append("codingLanguage", value.codingLanguage);
    if (value.programmingExp)
      requestData.append("programmingExp", value.programmingExp);
    requestData.append("aboutXcamp", value.aboutXcamp);
    console.log(requestData);
  };

  return (
    <div className={styles.evaluationFormContainer}>
      <div className={`${styles.evaluationForm} container`}>
        <div className={styles.title}>
          Quick assessment to match your kid to the right class
        </div>
        <Row gutter={15}>
          <Col lg={12} md={24}>
            <Form
              form={form}
              name="EvaluationForm"
              size="large"
              autoComplete="off"
              colon={false}
              onFinish={submitEmailValue}
            >
              <Row gutter={17}>
                <Col span={12}>
                  <Form.Item
                    name="stuName"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: "Input something!",
                      },
                    ]}
                  >
                    <Input placeholder="Student's Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="Email"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: "Input something!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={17}>
                <Col span={12}>
                  <Form.Item
                    name="phoneNumber"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: "Input something!",
                      },
                    ]}
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="grade"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: "Input something!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Grade"
                      options={[
                        { value: "5", label: "5" },
                        { value: "6", label: "6" },
                        { value: "7", label: "7" },
                        { value: "8", label: "8" },
                        { value: "9", label: "9" },
                        { value: "10", label: "10" },
                        { value: "11", label: "11" },
                        { value: "12", label: "12" },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="codingBackground"
                className={styles.required}
                rules={[
                  {
                    required: true,
                    message: "Input something!",
                  },
                ]}
              >
                <Select
                  placeholder="Coding Background"
                  options={[
                    {
                      value: "No coding experiences",
                      label: "No coding experiences",
                    },
                    {
                      value: "< half year coding experience",
                      label: "< half year coding experience",
                    },
                    {
                      value: "< 1 year coding experiences",
                      label: "< 1 year coding experiences",
                    },
                    {
                      value: "> 1 year coding experiences",
                      label: "> 1 year coding experiences",
                    },
                    {
                      value: "> 2 year coding experiences",
                      label: "> 2 year coding experiences",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="codingLanguage"
                className={styles.required}
                rules={[
                  {
                    required: true,
                    message: "Input something!",
                  },
                ]}
              >
                <Select
                  placeholder="coding Language"
                  options={[
                    {
                      value: "No coding experiences",
                      label: "No coding experiences",
                    },
                    {
                      value: "Java coding experiences",
                      label: "Java coding experiences",
                    },
                    {
                      value: "Python coding experiences",
                      label: "Python coding experiences",
                    },
                    {
                      value: "C++ coding experiences",
                      label: "C++ coding experiences",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item name="programmingExp" className={styles.unRequired}>
                <Input placeholder="Programming Contest Experiences(ex. USACO Silver)" />
              </Form.Item>
              <Form.Item
                name="aboutXcamp"
                className={styles.required}
                rules={[
                  {
                    required: true,
                    message: "Input something!",
                  },
                ]}
              >
                <Select
                  placeholder="How did you hear about X-Camp"
                  options={[
                    { value: "X-Camp Consultant", label: "X-Camp Consultant" },
                    {
                      value: "X-Camp Wechat Official Account",
                      label: "X-Camp Wechat Official Account",
                    },
                    { value: "X-Camp Events", label: "X-Camp Events" },
                    {
                      value: "X-Camp Social Media (FB, Linkedin, Twitter)",
                      label: "X-Camp Social Media (FB, Linkedin, Twitter)",
                    },
                    {
                      value: "Contest (HPI, Turing Cup)",
                      label: "Contest (HPI, Turing Cup)",
                    },
                    { value: "usaco.org", label: "usaco.org" },
                    {
                      value: "Discord (Teamscode, CinT, LiT)",
                      label: "Discord (Teamscode, CinT, LiT)",
                    },
                    { value: "Google Search", label: "Google Search" },
                    { value: "Wechat Moments", label: "Wechat Moments" },
                    {
                      value: "Word of mouth/Friends",
                      label: "Word of mouth/Friends",
                    },
                    {
                      value: "Xiaohongshu(小红书)",
                      label: "Xiaohongshu(小红书)",
                    },
                    { value: "Others", label: "Others" },
                  ]}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  {t("Submit")}
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col lg={12} md={24}>
            <div className={styles.right}>
              <img src="/image/Evaluation/light.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EvaluationForm;
