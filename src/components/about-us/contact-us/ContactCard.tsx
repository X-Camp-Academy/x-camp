"use client";
import React from "react";
import { Space, Row, Col, Card, Typography } from "antd";
import styles from "./ContactCard.module.scss";
import { LaptopOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import ColorfulCard from "@/components/common/colorful-card";

const { Title, Paragraph, Text } = Typography;

const ContactCard: React.FC = () => {
  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: "Email",
      description: "Please email us at partner@x-camp.org",
    },
    {
      icon: <PhoneOutlined rotate={180} />,
      title: "Text",
      description: "Feel free to text us at 510-708-8390",
    },
    {
      icon: <LaptopOutlined />,
      title: "Office Hour",
      description: "7:00am - 5:00pm PT Monday Off",
    },
  ];

  return (
    <div className={`${styles.contactCardContent} container`}>
      <Row gutter={[32, 32]}>
        {contactInfo.map((item, index) => (
          <Col
            key={index}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <ColorfulCard border={"top"} index={index} key={index}>
              <Card className={styles.card}>
                <Space direction="vertical">
                  <Space align="center">
                    <div className={styles.icon}> {item.icon}</div>
                    <Title level={5} style={{ margin: 0 }}>
                      {item.title}
                    </Title>
                  </Space>
                  <Paragraph type="secondary" style={{ fontSize: 16 }}>
                    {item.description}
                  </Paragraph>
                </Space>
              </Card>
            </ColorfulCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactCard;
