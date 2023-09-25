'use client';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { Col, Empty, Layout, Row } from 'antd';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import ArticleContent from './article-content';
import ArticleSider from './article-sider';
import styles from './index.module.scss';

const { Content } = Layout;

const Article: React.FC = () => {
  const articleId = useParams()?.articleId;
  const { data: newEventData, run } = useGetNewEvent({
    current: 1,
    pageSize: 1
  });

  console.log(useParams());

  useEffect(() => {
    run({
      populate: '*',
      sort: ['order:desc'],
      filters: {
        id: {
          $eq: Number(articleId)
        }
      }
    });
  }, []);

  return (
    <Layout className={styles.main}>
      <div className="container">
        <Content className={styles.content}>
          {newEventData?.data?.[0] ? (
            <Row>
              <Col lg={17} md={24}>
                <ArticleContent props={newEventData?.data?.[0]} />
              </Col>
              <Col lg={7} md={24}>
                <ArticleSider eventCategory={newEventData?.data?.[0]?.attributes?.eventCategory} articleId={+newEventData?.data?.[0]?.id!} />
              </Col>
            </Row>
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </Content>
      </div>
    </Layout>
  );
};

export default Article;
