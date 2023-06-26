import { Space, Row, Col, Image, Typography, Button } from "antd";
import styles from './TopBanner.module.scss';
const { Title, Paragraph } = Typography;

const TopBanner: React.FC = () => {
    return (
        <div className={styles.topBannerContainer}>
            <div className="container">
                <Row>
                    <Col xs={24} sm={24} md={14} className={styles.col1}>
                        <Space direction="vertical">
                            <Title className={styles.title}>Careers</Title>
                            <Paragraph className={styles.paragraph}>
                                X-Camp offers a wide range of career opportunities within our company. Please note that all openings are based in the Silicon Valley except for TAs.
                            </Paragraph>
                            <Button size="large" className={styles.contactBtn}>
                                Contact Us
                            </Button>
                        </Space>
                    </Col>
                    <Col xs={24} sm={24} md={{ span: 8, offset: 2 }} className={styles.col2}>
                        <Space direction="vertical">
                            <Image
                                alt="image"
                                src="/image/home/course-4.png"
                                preview={false}
                                className={styles.image}
                            />
                        </Space>
                    </Col>
                </Row>
                <Space></Space>
            </div>
        </div>
    );
};

export default TopBanner;

