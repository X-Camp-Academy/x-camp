import { Space, Row, Col, Card, Image, Typography } from 'antd';
import styles from './TopBanner.module.scss';
const { Title, Paragraph, Text } = Typography;

const TopBanner: React.FC = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={12} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>School Calendar</Title>
              <Paragraph className={styles.paragraph}>
                {
                  "Since X-Camp was established, USACO has achieved remarkable results as our students' side project on their learning journey. "
                }
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
