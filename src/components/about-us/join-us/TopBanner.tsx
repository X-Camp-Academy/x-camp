import { Space, Row, Col, Image, Typography, Button } from "antd";
import styles from "./TopBanner.module.scss";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph } = Typography;

const TopBanner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row className={styles.content}>
          <Col sm={24} lg={14} className={styles.col1}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("Careers")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("Careers.Desc")}
              </Paragraph>
              <Button size="large" className={styles.contactBtn}>
                {t("ContactUs")}
                <img src="/image/about-us/join-us/comment.png" alt="" />
              </Button>
            </Space>
          </Col>
          <Col sm={24} lg={{ span: 8, offset: 2 }} className={styles.col2}>
            <Space direction="vertical">
              <Image
                alt="image"
                src="/image/about-us/join-us/JoinUsBannerAnimal.png"
                preview={false}
                className={styles.image}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
