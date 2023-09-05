"use client";
import React from "react";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const CarouselContent = dynamic(() => import("./CarouselContent"));
const DiscoverCourses = dynamic(
  () => import("@/components/common/discover-courses")
);
const AboutXCamp = dynamic(() => import("./AboutXCamp"));
const XCampFounders = dynamic(() => import("@/components/common/xcamp-founders"));
const WeSupport = dynamic(() => import("./WeSupport"));
const Faculty = dynamic(() => import("./Faculty"));
const PublicCalendar = dynamic(() => import("./PublicCalendar"));
const StudentProjects = dynamic(() => import("./StudentProjects"));
const XAlumni = dynamic(() => import("./XAlumni"));
const Partners = dynamic(() => import("./Partners"));
const Reviews = dynamic(() => import("@/components/common/reviews"));

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

        <XCampFounders />
        <WeSupport />

        <PublicCalendar />
        <StudentProjects />
        <XAlumni />
        <Reviews reviewsData={reviewsData} />
        <Partners />
      </Content>
    </Layout>
  );
};

export default Home;
