"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import CampIntro from "./camp-intro";
import CampCarousel from "./camp-carousel";
import CourseAbstract from "../detail/top-banner/course-card/course-abstract";
import ColorfulCard from "@/components/common/colorful-card";
import Testimony from "@/components/home/Testimony";
import Faqs from "@/components/common/faqs";
import {
  useGetCourses,
  useGetFaq,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
import { FaqCategory } from "@/apis/strapi-client/define";
const { Content } = Layout;
const CourseCamps = () => {
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony();
  const params = {
    isCamp: {
      $eq: true
    }
  }
  const { data: courses,  } = useGetCourses(params);

  console.log(courses);
  
  const { data: faq } = useGetFaq({
    ready: Boolean(courses),
    category: FaqCategory.CoursesQA,
    courseId: courses?.map((v) => String(v?.id)),
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.courseCamps}>
        <Content>
          <TopBanner />
          <CampIntro />
          <CampCarousel />
          <div className={styles.courseCard}>
            <div className="container">
              <ColorfulCard border={"bottom"} index={1} animate={false}>
                <div className={styles.cardContent}>
                  <CourseAbstract />
                </div>
              </ColorfulCard>
            </div>
          </div>
          <div className={styles.video}>
            <div className="container">
              <video controls className={styles.videoBox}>
                <source
                  src="https://media.strapi.turingstar.com.cn/production/2023/5/_2cd2122d99.mp4?updated_at=2023-05-14T08:17:12.234Z"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <Faqs title="Camps FAQs" data={faq} />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseCamps;
