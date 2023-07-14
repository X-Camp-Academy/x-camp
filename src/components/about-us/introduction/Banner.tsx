import { Space, Row, Col, Image, Typography } from "antd";
import styles from "./Banner.module.scss";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph } = Typography;

const Banner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>
                {t("AboutUs.Introduction")}
              </Title>
              <Paragraph className={styles.paragraph}>
                {t("AboutUs.Introduction.Desc")}
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
                src="/image/about-us/introduction/top-banner.png"
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

export default Banner;
