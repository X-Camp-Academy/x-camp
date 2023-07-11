import {
  Space,
  Row,
  Col,
  Image,
  Typography,
  Button,
  Card,
  List,
  Avatar,
} from 'antd';
import styles from './GetCredit.module.scss';
import React from 'react';
const { Title } = Typography;

const GetCredit: React.FC = () => {
  const listData = [
    "Share X-Camp's program with your friends!",
    'When signing up, have them select "Word of Mouth" as the referral source.',
    'Ask them to enter your child\'s name in the "Referral by Discount Code" box.',
    'Your friend will receive a $50 discount on their payment.',
    'You will receive a $100 credit towards your next payment.',
    'If your friend forgets to use the code or mentions you, contact us within a month.',
    'Remember, spreading the word about our program can benefit you and your friends!',
  ];

  return (
    <>
      <div className={styles.GetCreditContainer}>
        <div className={`${styles.GetCredit} container`}>
          <Row>
            <Col lg={14} md={24} xs={24}>
              <Space direction="vertical">
                <Title className={styles.title}>
                  How does the referral program work?
                </Title>
                <List
                  dataSource={listData}
                  bordered={false}
                  split={false}
                  renderItem={(item, index) => {
                    return (
                      <List.Item className={styles.description}>
                        {index !== listData.length - 1 && (
                          <span>{index + 1}. </span>
                        )}
                        {item}
                      </List.Item>
                    );
                  }}
                />
              </Space>
            </Col>
            <Col lg={10} md={24} xs={24} className={styles.imgCol}>
              <Image
                alt="img"
                src="/image/about-us/student-recommend/circleTurtor.png"
                preview={false}
                className={styles.image}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default GetCredit;
