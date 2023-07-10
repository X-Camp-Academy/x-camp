"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import { useGetTestimony } from "@/apis/strapi-client/strapi";

const CarouselContent = dynamic(() => import("./CarouselContent"));
const DiscoverCourses = dynamic(() => import("./DiscoverCourses"));
const AboutXCamp = dynamic(() => import("./AboutXCamp"));
const XCampFounder = dynamic(() => import("./XCampFounder"));
const WeSupport = dynamic(() => import("./WeSupport"));
const Faculty = dynamic(() => import("./Faculty"));
const PublicCalendar = dynamic(() => import("./PublicCalendar"));
const StudentProjects = dynamic(() => import("./StudentProjects"));
const XAlumni = dynamic(() => import("./XAlumni"));
const Partners = dynamic(() => import("./Partners"));
const Testimony = dynamic(() => import("./Testimony"));

const { Content } = Layout;

const Home: React.FC = () => {
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony();

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
