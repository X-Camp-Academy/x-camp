"use client";
import React from "react";
import { Typography, Button, Space } from "antd";
import styles from "./ContactUs.module.scss";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

const ContactUs: React.FC = () => {
  return (
    <div className={`${styles.contactUs} container`}>
      <div className={styles.card}>
        <div className={styles.circleRight} />
        <div className={styles.circleLeft} />
        <Space direction="vertical" align="center">
          <Title className={styles.title}>
            Is there anything else I need help with?
          </Title>
          <Paragraph style={{ textAlign: "center", fontSize: 18 }}>
            <strong>
              {
                "X-Camp aim to employ the best people from a wide pool of talent in order to create an environment where everybody’s contribution is valued and respected."
              }
            </strong>
          </Paragraph>
          <Link href="/about-us/contact-us">
            <Button className={styles.button}>Contact Us</Button>
          </Link>
        </Space>
      </div>
    </div>
  );
};

export default ContactUs;
