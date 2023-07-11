import { Space, Row, Col, Image, Typography, Button } from "antd";
import styles from './JoinUsFaculty.module.scss';
import { UsergroupAddOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;

const JoinUsFaculty: React.FC = () => {

    const imgUrlTwoList = [
        { url: '/image/home/yuan-big.png' },
        { url: '/image/home/yuan-big.png' },


    ];

    const imgUrlThreeList = [
        { url: '/image/home/yuan-big.png' },
        { url: '/image/home/yuan-big.png' },
        { url: '/image/home/yuan-big.png' },


    ];
    return (
        <>
            <div className={styles.joinUsFacultyContainer}>
                <Row className={`${styles.joinUsFaculty} container`}>
                    <Col className={styles.xCampIntro} lg={12} md={24} xs={24}>
                        <Space direction="vertical" size="large">
                            <Image
                                alt="image"
                                src="/logo/logo.png"
                                preview={false}
                                className={styles.logo} />
                            <Paragraph className={styles.introText}>
                                X-Camp Academy, a Silicon Valley based coding institute,
                                offers programming classes to 5-12th grade students from beginner to USACO
                                US Camp level.
                            </Paragraph>
                            <Button className={styles.introBtn}>X-Camp Faculty <UsergroupAddOutlined /></Button>
                        </Space>
                    </Col>
                    <Col className={styles.facultyImgs} lg={12} md={24} xs={24}>
                        <Row
                            gutter={16}
                        >

                            {imgUrlTwoList?.map((item, index) => {
                                return (
                                    <Col span={8}
                                        offset={3}
                                        key={index}>
                                        <Image
                                            alt="image"
                                            src={item.url}
                                            preview={false}
                                            className={styles.image}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row
                            gutter={16}
                            style={{ marginTop: '20px' }}
                        >
                            {imgUrlThreeList?.map((item, index) => {
                                return (
                                    <Col span={8}
                                        key={index}>
                                        <Image
                                            alt="image"
                                            src={item.url}
                                            preview={false}
                                            className={styles.image}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>

                </Row>

            </div>
        </>
    )
}

export default JoinUsFaculty;