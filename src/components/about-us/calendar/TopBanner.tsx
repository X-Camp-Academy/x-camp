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
          <Col xs={24} sm={24} md={12} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("SchoolCalendar")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("AboutUs.Achievements.Desc")}
              </Paragraph>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={12} className={styles.col}>
            <Image
              alt="image"
              src="/image/about-us/calendar/top-banner.png"
              preview={false}
              className={styles.image}
            />
          </Col>
        </Row>
        <Space></Space>
      </div>
    </div>
  );
};

export default TopBanner;
