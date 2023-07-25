import { Space, Row, Col, Image, Typography } from "antd";
import styles from "./TopBanner.module.scss";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph } = Typography;

const TopBanner = () => {
  const { format: t } = useLang();

  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("Achievements")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("AboutUs.Achievements.Desc")}
              </Paragraph>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <div className={styles.imgContain}>
              <Image
                alt="image"
                src="/image/about-us/achievements-banner.jpg"
                preview={false}
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
