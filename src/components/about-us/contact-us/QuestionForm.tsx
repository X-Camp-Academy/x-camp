"use client";
import React from "react";
import { Row, Col, Card, Typography, Form, Input, Button } from "antd";
import styles from "./QuestionForm.module.scss";
import QACard from "@/components/common/q&a";
import { useLang } from "@/hoc/with-intl/define";

const { TextArea } = Input;
const { Title } = Typography;

const QAPart = () => {
  const { format: t } = useLang();
  const QAData = [
    {
      question: "How can I refer friends.How can I refer friends",
      answer:
        "I don't know it. But you can ask for your parents.I don't know it. But you can ask for your parents.I don't know it. But you can ask for your parents.",
    },
    {
      question: "How can I refer friends",
      answer: "I don't know it. But you can ask for your parents.",
    },
    {
      question: "How can I refer friends",
      answer: "I don't know it. But you can ask for your parents.",
    },
    {
      question: "How can I refer friends",
      answer: "I don't know it. But you can ask for your parents.",
    },
  ];

  return (
    <div className={`${styles.qaContent} container`}>
      <Title className={styles.title}>{t("Questions")}</Title>
      <Row gutter={[32, 32]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          {QAData.map((item, index) => (
            <QACard
              key={"referral" + index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <Card className={styles.card}>
            <Title className={styles.formTitle}>{t("SubmitAQuestion")}</Title>
            <Form layout="vertical">
              <Row gutter={[16, 8]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label={t("FirstName")}>
                    <Input placeholder={t("FirstName")} />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label={t("LastName")}>
                    <Input placeholder={t("LastName")} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 8]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label={t("Email")}>
                    <Input placeholder="partner@x-camp.org" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label={t("Phone")}>
                    <Input placeholder="(XXX) XXX-XXXX" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label={t("Message")}>
                <TextArea
                  placeholder={t("YourMessageHere")}
                  className={styles.formTextArea}
                  autoSize={{ minRows: 6, maxRows: 6 }}
                />
              </Form.Item>

              <Form.Item>
                <Button className={styles.formButton}>Submit</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default QAPart;
