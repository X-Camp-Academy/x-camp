import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./Banner.module.scss";
const { Title, Paragraph, Text } = Typography;

const Banner: React.FC = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>
                X-Camp Academy, a Silicon Valley based coding institute
              </Title>
              <Paragraph className={styles.paragraph}>
                Offers programming classes to 5 - 12th graders from beginner to
                IOI level with structured, self-designed curriculum.
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
