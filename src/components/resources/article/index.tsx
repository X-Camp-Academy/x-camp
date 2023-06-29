"use client";
import React from "react";
import styles from "./index.module.scss";
import { Col, ConfigProvider, Layout, Row } from "antd";
import ArticleContent from "./article-content";
import ArticleSider from "./article-sider";
import { useSearchParams } from "next/navigation";
const { Content } = Layout;

const Article = () => {
  const params = useSearchParams();
  const articleId = params?.get("articleId");
  console.log("articleId", articleId);

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
            <Row>
              <Col lg={17} md={24}>
                <ArticleContent />
              </Col>
              <Col lg={7} md={24}>
                <ArticleSider />
              </Col>
            </Row>
          </Content>
        </div>
      </Layout>
    </ConfigProvider>
  );
};

export default Article;
