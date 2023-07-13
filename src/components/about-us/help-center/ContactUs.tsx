"use client";
import React from "react";
import { Typography, Button, Space } from "antd";
import styles from "./ContactUs.module.scss";
import Link from "next/link";
import { CommentOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const { format: t } = useLang();
  return (
    <div className={`${styles.contactUs} container`}>
      <div className={styles.card}>
        <div className={styles.circleRight} />
        <div className={styles.circleLeft} />
        <Space direction="vertical" align="center">
          <Title className={styles.title}>{t("NeedMoreHelp")}</Title>
          <Paragraph
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 500,
              color: "#172142",
              lineHeight: "34px",
            }}
          >
            <strong>
              {
                "X-Camp aims to provide you with more info about Course recommendations, Curriculum Guidance, Enrollment Assistance, etc. "
              }
            </strong>
          </Paragraph>
          <Link href="/about-us/contact-us">
            <Button className={styles.button}>
              Contact Us <CommentOutlined />
            </Button>
          </Link>
        </Space>
      </div>
    </div>
  );
};

export default ContactUs;
