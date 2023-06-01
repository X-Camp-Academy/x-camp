'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Rate, Typography } from 'antd';
import styles from './Comments.module.scss';

const { Title, Paragraph } = Typography;
const Comments: React.FC = () => {
  return (
    <div className={styles.commentsContainer}>
      <div className={styles.comments}>
        <Space size={28} className={styles.cards}>
          <Card>
            <Title level={2} className={styles.cardTitle}>
              parent of 201B
            </Title>
            <Rate disabled defaultValue={4} />
            <Paragraph className={styles.cardParagraph}>
              Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…
            </Paragraph>
          </Card>
          <Card>
            <Title level={3} className={styles.cardTitle}>
              parent of 201B
            </Title>
            <Rate disabled defaultValue={4} />
            <Paragraph className={styles.cardParagraph}>
              Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…
            </Paragraph>
          </Card>
          <Card>
            <Title level={3} className={styles.cardTitle}>
              parent of 201B
            </Title>
            <Rate disabled defaultValue={4} />
            <Paragraph className={styles.cardParagraph}>
              Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…
            </Paragraph>
          </Card>
        </Space>
      </div>
    </div >
  )
}

export default Comments;
