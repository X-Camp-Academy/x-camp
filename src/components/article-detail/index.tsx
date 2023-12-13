'use client';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { Col, Empty, Layout, Row } from 'antd';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Aside from './aside';
import Content from './content';
import styles from './index.module.scss';

const Article: React.FC = () => {
  const { articleId } = useParams();

  const { data: articleData, run } = useGetNewEvent({
    current: 1,
    pageSize: 1
  });

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
      <Layout.Content>
        <div className={`${styles.articleDetail} container`}>
          {articleData?.data?.[0] ? (
            <Row>
              <Col xs={24} sm={24} md={24} lg={16} xl={17}>
                <Content props={articleData?.data?.[0]} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={7}>
                <Aside eventCategory={articleData?.data?.[0]?.attributes?.eventCategory} articleId={+articleData?.data?.[0]?.id!} />
              </Col>
            </Row>
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Article;
