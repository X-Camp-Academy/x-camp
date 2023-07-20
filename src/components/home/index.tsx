"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import { useGetTestimony } from "@/apis/strapi-client/strapi";

const CarouselContent = dynamic(() => import("./CarouselContent"));
const DiscoverCourses = dynamic(
  () => import("@/components/common/discover-courses")
);
const AboutXCamp = dynamic(() => import("./AboutXCamp"));
const XCampFounder = dynamic(() => import("@/components/common/xcamp-founder"));
const WeSupport = dynamic(() => import("./WeSupport"));
const Faculty = dynamic(() => import("./Faculty"));
const PublicCalendar = dynamic(() => import("./PublicCalendar"));
const StudentProjects = dynamic(() => import("./StudentProjects"));
const XAlumni = dynamic(() => import("./XAlumni"));
const Partners = dynamic(() => import("./Partners"));
const Testimony = dynamic(() => import("./Testimony"));

const { Content } = Layout;

const Home = () => {
  //获取师生评价数据
  const { data } = useGetTestimony({
    ready: true,
    pageName: ["/home/"], // 因为首页的路由是空字符串，约定用/home/表示
  });

  const testimonyData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  // TODO 移动端下XCampFounder样式需要优化一下
  //  TODO ipad屏幕下PublicCalendar style需要修改
  //  TODO ipad屏幕下X-Alumni style需要修改
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.homeContainer}>
        <Content>
          <CarouselContent />
          <DiscoverCourses />
          <AboutXCamp />
          <XCampFounder />
          <WeSupport />
          <Faculty />
          <PublicCalendar />
          <StudentProjects />
          <XAlumni />
          <Partners />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Home;
