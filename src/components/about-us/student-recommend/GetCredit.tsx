import { Space, Row, Col, Image, Typography, List } from "antd";
import styles from "./GetCredit.module.scss";
import React from "react";
import { useLang } from "@/hoc/with-intl/define";
const { Title } = Typography;

const GetCredit = () => {
  const { format: t } = useLang();
  const listData = [
    t("Credit.Desc1"),
    t("Credit.Desc2"),
    t("Credit.Desc3"),
    t("Credit.Desc4"),
    t("Credit.Desc5"),
    t("Credit.Desc6"),
    t("Credit.Desc7"),
  ];

  return (
    <>
      <div className={styles.GetCreditContainer}>
        <div className={`${styles.GetCredit} container`}>
          <Row>
            <Col lg={14} md={24} xs={24}>
              <Space direction="vertical">
                <Title className={styles.title}>
                  {t("ReferralProgramWork")}
                </Title>
                <List
                  dataSource={listData}
                  bordered={false}
                  split={false}
                  renderItem={(item, index) => {
                    return (
                      <List.Item className={styles.description}>
                        {index !== listData.length - 1 && (
                          <span>{index + 1}. </span>
                        )}
                        {item}
                      </List.Item>
                    );
                  }}
                />
              </Space>
            </Col>
            <Col lg={10} md={24} xs={24} className={styles.imgCol}>
              <Image
                alt="img"
                src="/image/about-us/student-recommend/circleTurtor.png"
                preview={false}
                className={styles.image}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default GetCredit;
