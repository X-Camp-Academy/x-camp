import { Space, Row, Col, Image, Typography } from "antd";
import styles from "./TopBanner.module.scss";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
const { Title, Paragraph } = Typography;

const TopBanner = () => {
  const { format: t, lang } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={10} className={styles.col1}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("ReferralProgram")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("ReferralProgram.Desc1")}
                <br></br>
                {t("Earn")}
                <span>{getTransResult(lang, '$100', ' $100 ')}</span>
                {t("ReferralProgram.Desc2")}
                <span>{getTransResult(lang, '$50', ' $50 ')}</span>
                {t("ReferralProgram.Desc3")}
              </Paragraph>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={14} className={styles.col2}>
            <Space direction="vertical">
              <Image
                alt="image"
                src="/image/about-us/student-recommend/top-banner.png"
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
