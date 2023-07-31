import React from "react";
import styles from "./index.module.scss";
import { Row, Col, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.educationForumBanner}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={12} className={styles.left}>
            <Title className={styles.title}>{t("EducationalForum")}</Title>
            <Paragraph className={styles.description}>
              {t("EducationForum.Desc")}
            </Paragraph>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            className={styles.right}
          >
            <img className={styles.right} src="/image/resources/weekly-education-forum-banner.png" alt=""></img>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
