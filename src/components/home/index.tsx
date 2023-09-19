"use client";
import React from "react";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const CarouselContent = dynamic(() => import("./carousel-content"));
const DiscoverCourses = dynamic(
  () => import("@/components/common/discover-courses")
);
const AboutXCamp = dynamic(() => import("./about-xcamp"));
const WeSupport = dynamic(() => import("./we-support"));
const Faculty = dynamic(() => import("@/components/common/faculty"));
const PublicCalendar = dynamic(() => import("./public-calendar"));
const StudentProjects = dynamic(() => import("./student-projects"));
const XAlumni = dynamic(() => import("./xalumni"));
const Reviews = dynamic(() => import("@/components/common/reviews"));
const FixedButtons = dynamic(() => import("@/components/common/FixedButtons"));

const { Content } = Layout;

const Home: React.FC = () => {
  //获取师生评价数据
  const { data } = useGetReviews({
    ready: true,
  });

  const reviewsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  return (
    <Layout className={styles.homeContainer}>
      <Content>
        <CarouselContent />
        {/*why x-camp*/}
        <AboutXCamp />
        <DiscoverCourses />
        <Faculty />
        <WeSupport />
        <PublicCalendar />

        {/*<XCampFounders />*/}
        <StudentProjects />
        {/*Community*/}
        <XAlumni />
        <Reviews reviewsData={reviewsData} />
        <FixedButtons />
        {/*<Partners />*/}
      </Content>
    </Layout>
  );
};

export default Home;
