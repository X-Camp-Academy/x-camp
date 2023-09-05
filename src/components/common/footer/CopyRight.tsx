"use client";
import React from "react";
import { Space, Row, Col, Image, Typography } from "antd";
import { HistoryOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./CopyRight.module.scss";
import { useLang } from "@/hoc/with-intl/define";
import CopyRightIcons from "../copy-right-icons";

const { Title, Paragraph, Text } = Typography;

const CopyRight: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.copyRightContainer}>
      <div className={`${styles.copyRight} container`}>
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={24} md={24} lg={12}>
            <Space direction="vertical" className={styles.spaceLeft} size={48}>
              <Space direction="vertical">
                <Image
                  alt=""
                  src="/logo/logo.png"
                  preview={false}
                  className={styles.image}
                />
                <Image
                  alt="slogan"
                  preview={false}
                  src="/image/home/footer-slogan.png"
                  width={220}
                  height={24}
                />
              </Space>

              <Space direction="vertical">
                <Paragraph className={styles.paragraph}>
                  <PhoneOutlined />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>{t("Tel")}+1 - 510-708-8390</Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <MailOutlined />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>
                    <a href="mailto:info@x-camp.academy" style={{ color: 'inherit' }}>Email:info@x-camp.academy</a>
                  </Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <HistoryOutlined />
                  <Text className={styles.text}>
                    Office Hour: Tue - Sun (Monday Off)
                  </Text>
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Space align="start" className={styles.spaceRight}>
             <div>
               <Title className={styles.text}>X-Camp Academy</Title>
               <Space direction="vertical">
                 <Link href={"/about-us/calendar"}>{t('SchoolCalendar')}</Link>
                 <Link href={"/courses#classify0"}>{'Online Courses'}</Link>
                 <Link href={"/courses#camps"}>{t('In-personCamps')}</Link>
               </Space>
             </div>
             <div>
               <Title className={styles.text}>Activity</Title>
               <Space direction="vertical">
                 <Link href={"/resources/weekly-open-house"}>{t('WeeklyOpenHouse')}</Link>
                 <Link href={"/about-us/calendar"}>{'Event Calendar'}</Link>
                 <a href={"/resources/usaco-live-solutions"}>{'USACO'}</a>
               </Space>
             </div>
             <div>
               <Title className={styles.text}>{'Help Center'}</Title>
               <Space direction="vertical">
                 <Link href={"/about-us/contact-us"}>{'Contact Us'}</Link>
                 <Link href={"/about-us/contact-us"}>{'Join Us'}</Link>
                 <Link href={"/about-us/help-center"}>{'FAQ'}</Link>
               </Space>
             </div>
            </Space>
          </Col>
        </Row>
        <div className={styles.bar}></div>

        <div className={styles.bottomContainer}>
          <Title className={styles.bottomTitle}>Copyright @ 2023 X-Camp</Title>
          <CopyRightIcons />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
