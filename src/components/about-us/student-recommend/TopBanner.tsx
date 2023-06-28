import { Space, Row, Col, Image, Typography } from "antd";
import styles from './TopBanner.module.scss';
const { Title, Paragraph } = Typography;

const TopBanner: React.FC = () => {
    return (
        <div className={styles.topBannerContainer}>
            <div className="container">
                <Row>
                    <Col xs={24} sm={24} md={14} className={styles.col1}>
                        <Space direction="vertical">
                            <Title className={styles.title}>Referral Program</Title>
                            <Paragraph className={styles.paragraph}>
                            {"Encourage your friend's kids AND your kid's friends to join our coding program. Earn "}
                            </Paragraph>
                        </Space>
                    </Col>
                    <Col xs={24} sm={24} md={{ span: 8, offset: 2 }} className={styles.col2}>
                        <Space direction="vertical">
                            <Image
                                alt="image"
                                src="/image/home/course-1.png"
                                preview={false}
                                className={styles.image}
                                //
                            />
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TopBanner;

