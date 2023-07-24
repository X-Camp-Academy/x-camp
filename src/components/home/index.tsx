"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Layout } from "antd";
import styles from "./index.module.scss";
import { useGetReviews } from "@/apis/strapi-client/strapi";

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
const Reviews = dynamic(() => import("@/components/common/reviews"));

const { Content } = Layout;

const Home = () => {
  //获取师生评价数据
  const { data } = useGetReviews({
    ready: true,
    pageName: ["/home/"], // 因为首页的路由是空字符串，约定用/home/表示
  });

  const reviewsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  // TODO 移动端下XCampFounder样式需要优化一下
  //  TODO ipad屏幕下PublicCalendar style需要修改
  //  TODO ipad屏幕下X-Alumni style需要修改
  return (
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
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Home;
