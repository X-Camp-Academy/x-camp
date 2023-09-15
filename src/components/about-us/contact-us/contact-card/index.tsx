"use client";
import React from "react";
import { Space, Row, Col, Card, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { LaptopOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import ColorfulCard from "@/components/common/colorful-card";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography;

const ContactCard: React.FC = () => {
  const { format: t } = useLang();
  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: t("Contact.Email"),
      description: t("Contact.Email.info"),
    },
    {
      icon: <PhoneOutlined rotate={180} />,
      title: t("Contact.Phone"),
      description: t("Contact.Phone.info"),
    },
    {
      icon: <LaptopOutlined />,
      title: t("Contact.OfficeHour"),
      description: t("Contact.OfficeHour.info"),
    },
  ];

  return (
    <div className={`${styles.contactCardContent} container`}>
      <Row gutter={[32, 32]} className={styles.row}>
        {contactInfo.map((item, index) => (
          <Col
            key={index}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <ColorfulCard
              border={"top"}
              index={contactInfo.length - index - 1}
              animate={false}
            >
              <Card className={styles.card}>
                <Space direction="vertical">
                  <Space align="center">
                    <div className={styles.icon}> {item.icon}</div>
                    <Title
                      level={5}
                      style={{ margin: 0 }}
                      className={styles.title}
                    >
                      {item.title}
                    </Title>
                  </Space>
                  <Paragraph type="secondary" style={{ fontSize: 18 }}>
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
