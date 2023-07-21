"use client";
import React, { useEffect } from "react";
import { ConfigProvider, Layout, message } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";

const ContactCard = dynamic(() => import("./ContactCard"));
const TopBanner = dynamic(() => import("./TopBanner"));
const Reviews = dynamic(() => import("@/components/common/reviews"));
const QuestionForm = dynamic(() => import("./QuestionForm"));
const AddressMap = dynamic(() => import("./AddressMap"));
const { Content } = Layout;

const ContactUsContent = () => {
  const pathname = usePathname();
  const { hash } = window.location;
  const [messageApi, contextHolder] = message.useMessage();


  // 请求当前页面的评论
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });

  useEffect(() => {
    if (hash === '#trial-class') {
      messageApi.open({
        type: 'success',
        content: 'Welcome to contact us for your interested class. ',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    }
  }, [hash]);
  return (
    <>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FFAD11",
          },
        }}
      >
        <Layout className={styles.QAContainer}>
          <Content>
            {contextHolder}
            <TopBanner />
            <ContactCard />
            <QuestionForm />
            <AddressMap />
            <Reviews reviewsData={reviewsData} />
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default ContactUsContent;
