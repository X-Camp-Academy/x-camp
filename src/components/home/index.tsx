"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";

const CarouselContent = dynamic(() => import("./CarouselContent"));
const DiscoverCourses = dynamic(() => import("./DiscoverCourses"));
const AboutXCamp = dynamic(() => import("./AboutXCamp"));
const FoundingTeam = dynamic(() => import("./FoundingTeam"));
const WeSupport = dynamic(() => import("./WeSupport"));
const Faculty = dynamic(() => import("./Faculty"));
const PublicCalendar = dynamic(() => import("./PublicCalendar"));
const StudentProjects = dynamic(() => import("./StudentProjects"));
const XAlumni = dynamic(() => import("./XAlumni"));
const Partners = dynamic(() => import("./Partners"));
const Comments = dynamic(() => import("./Comments"));
const CopyRight = dynamic(() => import("../common/footer/CopyRight"));
const SubscribeNewsletter = dynamic(
  () => import("../common/footer/SubscribeNewsletter")
);
const { Content } = Layout;

const Home: React.FC = () => {
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
          <FoundingTeam />
          <WeSupport />
          <Faculty />
          <PublicCalendar />
          <StudentProjects />
          <XAlumni />
          <Partners />
          <Comments />
          <CopyRight />
          <SubscribeNewsletter />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Home;
