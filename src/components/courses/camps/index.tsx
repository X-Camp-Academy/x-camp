"use client";
import React from "react";
import { Layout } from "antd";
import { useParams, usePathname } from "next/navigation";
import { useLang } from "@/hoc/with-intl/define";
import ColorfulCard from "@/components/common/colorful-card";
import CourseAbstract from "../course-abstract";
import Reviews from "@/components/common/reviews";
import Faqs from "@/components/common/faqs";
import Banner from "./banner";
import Introduction from "./introduction";
import {
  useGetCourses,
  useGetFaq,
  useGetReviews,
} from "@/apis/strapi-client/strapi";
import { FaqCategory } from "@/apis/strapi-client/define";
import styles from "./index.module.scss";

const { Content } = Layout;

const CourseCamps: React.FC = () => {
  const params = useParams();
  const pathname = usePathname();
  const { format: t } = useLang();
  const { data: coursesData } = useGetCourses({
    filters: {
      id: { $eq: Number(params?.courseId) },
    },
  });

  // 请求类别为CoursesQA, courseId为isCamp课程, pageName 为"/courses/camps/"的Faq
  const { data: campsCourse } = useGetCourses({
    filters: {
      isCamp: {
        $eq: true,
      },
    },
  });

  const { data: faq } = useGetFaq({
    ready: Boolean(campsCourse),
    category: FaqCategory.CampsQA,
    pageName: [pathname as string],
  });
  // 请求courseId为isCamp课程, pageName 为"/courses/camps/"的评论
  const { data: reviewsData } = useGetReviews({
    ready: Boolean(campsCourse),
    courseId: campsCourse?.data?.map((v) => String(v?.id)),
    pageName: [pathname],
  });

  return (
    <Layout className={styles.courseCamps}>
      <Content>
        <Banner />
        <Introduction />
        <div className={styles.courseCard}>
          <div className="container">
            <ColorfulCard border={"bottom"} index={1} animate={false}>
              <div className={styles.cardContent}>
                <CourseAbstract {...coursesData?.data[0]?.attributes} />
              </div>
            </ColorfulCard>
          </div>
        </div>
        <Faqs title={t("CampsFAQs")} data={faq} />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default CourseCamps;
