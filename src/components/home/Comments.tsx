'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Rate, Typography } from 'antd';
import styles from './Comments.module.scss';

const { Title, Text, Paragraph } = Typography;
const Comments: React.FC = () => {
  const comments = [
    {
      title: 'parent of 201A',
      rate: 4,
      comment: "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
    },
    {
      title: 'parent of 201B',
      rate: 5,
      comment: "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
    },
    {
      title: 'parent of 201C',
      rate: 5,
      comment: "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
    },
  ]

  const computedStyle = (index: number) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingTop: 6,
    };
    const colors = ['#D46B14', '#FFAD11', '#FFD600'];

    return { ...defaultStyle, backgroundColor: colors[index % 3] };
  }
  return (
    <div className={styles.commentsContainer}>
      <div className={styles.comments}>
        <Row
          gutter={40}
          justify='center'
          align='middle'
          className={styles.row}
        >
          {
            comments.map((item, index) => {
              return (
                <Col key={index} xs={24} lg={8}>
                  <div style={computedStyle(index)}>
                    <Card>
                      <Space direction='vertical'>
                        <Text className={styles.cardTitle}>{item?.title}</Text>
                        <Rate disabled defaultValue={item?.rate} />
                        <Paragraph className={styles.cardParagraph}>{item?.comment}</Paragraph>
                      </Space>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div >
  )
}

export default Comments;
