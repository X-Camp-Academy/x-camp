"use client";
import React from "react";
import { Row, Col, Card, Typography, Form, Input, Button } from "antd";
import styles from "./QuestionForm.module.scss";
import QACard from "@/components/common/q&a";

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const QAPart: React.FC = () => {
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
      <Title className={styles.title}>{"Questions?"}</Title>
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
            <Title className={styles.formTitle}>Submit a Question</Title>
            <Form layout="vertical">
              <Row gutter={[16, 8]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label="First Name">
                    <Input placeholder="First Name" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label="Last Name">
                    <Input placeholder="Last Name" />
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
                  <Form.Item label="Email">
                    <Input placeholder="partner@x-camp.org" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label="Phone">
                    <Input placeholder="(XXX) XXX-XXXX" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Message">
                <TextArea
                  placeholder="Your message here"
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
