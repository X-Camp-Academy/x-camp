'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image, Button } from 'antd';
import styles from './Faculty.module.scss';
import { LeftOutlined, RightOutlined, SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const Faculty: React.FC = () => {
  const facultyData = [
    {
      name: 'Ryan',
      description: '10+ years programming language',
      avatar: '/image/home/ryan.png'
    },
    {
      name: 'Ryan',
      description: '10+ years programming language',
      avatar: '/image/home/ryan.png'
    },
    {
      name: 'Ryan',
      description: '10+ years programming language',
      avatar: '/image/home/ryan.png'
    },
  ]
  const computedStyle = (index: number) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingBottom: 6,
    };
    const colors = ['#D46B14', '#FFAD11', '#FFD600'];

    return { ...defaultStyle, backgroundColor: colors[index % 3] };
  }
  return (
    <div className={styles.faculty}>
      <Space direction='vertical' align='center'>
        <Title className={styles.title}>Faculty</Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and other projects and event every quarter to inspire students . It is a great opportunity for students to showcase what they have learned from classes .
        </Paragraph>
        <Row
          className={styles.row}
          gutter={40}
          justify='center'
          align='middle'
        >
          {
            facultyData.map((item, index) => {
              return (
                <Col key={index} xs={8} sm={8} md={8} lg={8}>
                  <div style={computedStyle(index)}>
                    <Card
                      bodyStyle={{
                        paddingBottom: 0,
                      }}
                    >
                      <Space>
                        <Space direction='vertical'>
                          <Text className={styles.name}>{item?.name}</Text>
                          <Paragraph
                            ellipsis={{ rows: 5 }}
                            className={styles.description}
                          >
                            {item?.description}
                          </Paragraph>
                          <Button type="primary" size="small" ghost={true} shape="circle" className={styles.button}>
                            <RightOutlined />
                          </Button>
                        </Space>
                        <Image
                          src={item?.avatar}
                          alt="avatar"
                          preview={false}
                          width={150}
                          height={155}
                        />
                      </Space>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Space>
    </div >
  )
}

export default Faculty;
