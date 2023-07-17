"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Col, ConfigProvider, Empty, Layout, Row } from "antd";
import ArticleContent from "./article-content";
import ArticleSider from "./article-sider";
import { useParams } from "next/navigation";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const Article = () => {
  const articleId = useParams()?.articleId;
  const pageSize = 1;
  const [current, setCurrent] = useState<number>(1);

  const { data: newEventData, run } = useGetNewEvent({
    current,
    pageSize,
  });

  useEffect(() => {
    run({
      populate: '*',
      sort: ['order:desc'],
      filters: {
        id: {
          $eq: Number(articleId)
        }
      },
    })
  }, [])


  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.main}>
        <div className="container">
          <Content className={styles.content}>
            {
              newEventData?.[0] ?
                <Row>
                  <Col lg={17} md={24}>
                    <ArticleContent props={newEventData?.[0]} />
                  </Col>
                  <Col lg={7} md={24}>
                    <ArticleSider eventCategory={newEventData?.[0]?.attributes?.eventCategory} articleId={+newEventData?.[0]?.id!} />
                  </Col>
                </Row> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }
          </Content>
        </div>
      </Layout>
    </ConfigProvider>
  );
};

export default Article;
