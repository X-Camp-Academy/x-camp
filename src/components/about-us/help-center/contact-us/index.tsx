"use client";
import React from "react";
import Link from "next/link";
import { Typography, Button, Space } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography;

const ContactUs: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
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
            <strong>{t("NeedMoreHelp.Desc")}</strong>
          </Paragraph>
          <Link href="/about-us/contact-us">
            <Button className={styles.button} onClick={() => { router.push('/about-us/contact-us'); }}>
              {t("ContactUs")}
              <CommentOutlined />
            </Button>
          </Link>
        </Space>
      </div>
    </div>
  );
};

export default ContactUs;
