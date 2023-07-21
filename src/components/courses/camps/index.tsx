"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import CampIntro from "./camp-intro";
import CourseAbstract from "../detail/top-banner/course-card/course-abstract";
import ColorfulCard from "@/components/common/colorful-card";
import Reviews from "@/components/common/reviews";
import Faqs from "@/components/common/faqs";
import {
  useGetCourses,
  useGetFaq,
  useGetReviews,
} from "@/apis/strapi-client/strapi";
import { FaqCategory } from "@/apis/strapi-client/define";
import { usePathname } from "next/navigation";
import { useLang } from "@/hoc/with-intl/define";
const { Content } = Layout;
const CourseCamps = () => {
  const { format: t } = useLang();
  const pathname = usePathname();
  // 请求类别为CoursesQA, courseId为isCamp课程, pageName 为"/courses/camps/"的Faq
  const { data: courses } = useGetCourses({
    filters: {
      isCamp: {
        $eq: true,
      },
    },
  });

  const { data: faq } = useGetFaq({
    ready: Boolean(courses),
    category: FaqCategory.CampsQA,
    pageName: [pathname],
  });
  // 请求courseId为isCamp课程, pageName 为"/courses/camps/"的评论
  const { data: reviewsData } = useGetReviews({
    ready: Boolean(courses),
    courseId: courses?.data?.map((v) => String(v?.id)),
    pageName: [pathname],
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
          {/* <CampCarousel /> */}
          <div className={styles.courseCard}>
            <div className="container">
              <ColorfulCard border={"bottom"} index={1} animate={false}>
                <div className={styles.cardContent}>
                  <CourseAbstract />
                </div>
              </ColorfulCard>
            </div>
          </div>
          <Faqs title={t("CampsFAQs")} data={faq} />
          <Reviews reviewsData={reviewsData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseCamps;
