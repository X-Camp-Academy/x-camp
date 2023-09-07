"use client";
import React from "react";
import { Button, Col, Form, Input, Row, Select, message } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { useSubmitEvaluation } from "@/apis/send-email-client/sendEmail";
import { submitEvaluationRequest } from "@/apis/send-email-client";
import styles from "./index.module.scss";

const EvaluationForm: React.FC = () => {
  const { format: t } = useLang();
  const [form] = Form.useForm();
  const { runAsync: sendEmail, data } = useSubmitEvaluation();

  const submitEmailValue = async (value: submitEvaluationRequest) => {
    const result = await sendEmail(value);
    if (result.msg == 'ok') {
      message.success(t("Evaluation.form.success"));
      form.resetFields();
    }
    else {
      message.error(t("Evaluation.form.fail"));
    }
  };

  return (
    <div className={styles.evaluationFormContainer}>
      <div className={`${styles.evaluationForm} container`}>
        <div className={styles.title}>
          {t('Evaluation.form.title')}
        </div>
        <Row gutter={24}>
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
                        message: t("Evaluation.form.stuName.required")
                      },
                    ]}
                  >
                    <Input placeholder={t("Evaluation.form.stuName")} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: t("Evaluation.form.Email.required"),

                      },
                      {
                        type: "email",
                        message: t("Evaluation.form.Email.format"),
                      }
                    ]}
                  >
                    <Input placeholder={t("Evaluation.form.Email")} />
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
                        message: t("Evaluation.form.Phone.required"),
                      },
                    ]}
                  >
                    <Input placeholder={t('Evaluation.form.Phone')} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="grade"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: t("Evaluation.form.Grade.required"),
                      },
                    ]}
                  >
                    <Select
                      placeholder={t("Evaluation.form.Grade")}
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
                    message: t("Evaluation.form.CodingBackground.required"),
                  },
                ]}
              >
                <Select
                  placeholder={t('Evaluation.form.CodingBackground')}
                  options={[
                    {
                      value: "No coding experiences",
                      label: t("Evaluation.form.CodingBackground.NoCodingExperience"),
                    },
                    {
                      value: "< half year coding experience",
                      label: t("Evaluation.form.CodingBackground.LessThanHalfYear"),
                    },
                    {
                      value: "< 1 year coding experiences",
                      label: t("Evaluation.form.CodingBackground.LessThanOneYear"),
                    },
                    {
                      value: "> 1 year coding experiences",
                      label: t("Evaluation.form.CodingBackground.MoreThanOneYear"),
                    },
                    {
                      value: "> 2 year coding experiences",
                      label: t("Evaluation.form.CodingBackground.MoreThanTwoYear"),
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
                    message: t("Evaluation.form.CodingLanguage.required"),
                  },
                ]}
              >
                <Select
                  placeholder={t('Evaluation.form.CodingLanguage')}
                  options={[
                    {
                      value: "No coding experiences",
                      label: t('Evaluation.form.CodingLanguage.NoCodingExperience'),
                    },
                    {
                      value: "Java coding experiences",
                      label: t('Evaluation.form.CodingLanguage.Java'),
                    },
                    {
                      value: "Python coding experiences",
                      label: t('Evaluation.form.CodingLanguage.Python'),
                    },
                    {
                      value: "C++ coding experiences",
                      label: t('Evaluation.form.CodingLanguage.C++'),
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item name="programmingExp" className={styles.unRequired}>
                <Input placeholder={t('Evaluation.form.ContestExperience')} />
              </Form.Item>
              <Form.Item
                name="aboutXcamp"
                className={styles.required}
                rules={[
                  {
                    required: true,
                    message: t("Evaluation.form.AboutXCamp.required"),
                  },
                ]}
              >
                <Select
                  placeholder={t('Evaluation.form.AboutXCamp')}
                  options={[
                    { value: "X-Camp Consultant", label: t('Evaluation.form.AboutXCamp.Consultant') },
                    {
                      value: "X-Camp WeChat Official Account",
                      label: t('Evaluation.form.AboutXCamp.OfficialAccount'),
                    },
                    { value: "X-Camp Events", label: t('Evaluation.form.AboutXCamp.Events') },
                    {
                      value: "X-Camp Social Media (FB, Linkedin, Twitter)",
                      label: t('Evaluation.form.AboutXCamp.SocialMedia'),
                    },
                    {
                      value: "Contest (HPI, Turing Cup)",
                      label: t('Evaluation.form.AboutXCamp.Contest'),
                    },
                    { value: "usaco.org", label: t('Evaluation.form.AboutXCamp.USACO') },
                    {
                      value: "Discord (Teamscode, CinT, LiT)",
                      label: t('Evaluation.form.AboutXCamp.Discord'),
                    },
                    { value: "Google Search", label: t('Evaluation.form.AboutXCamp.GoogleSearch') },
                    { value: "Wechat Moments", label: t('Evaluation.form.AboutXCamp.WeChatMoments') },
                    {
                      value: "Word of mouth/Friends",
                      label: t('Evaluation.form.AboutXCamp.Friend'),
                    },
                    {
                      value: "Xiaohongshu(小红书)",
                      label: t('Evaluation.form.AboutXCamp.Xiaohongshu'),
                    },
                    { value: "Others", label: t('Evaluation.form.AboutXCamp.Other') },
                  ]}
                />
              </Form.Item>

              <Form.Item className={styles.unRequired}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  {t("Submit")}
                </Button>
              </Form.Item>


            </Form>
          </Col>
          <Col lg={12} md={24}>
            <div className={styles.right}>
              <img src="/image/evaluation/light.png" alt="img" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EvaluationForm;
