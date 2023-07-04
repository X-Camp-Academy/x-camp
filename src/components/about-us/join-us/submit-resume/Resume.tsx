import { Card } from "antd";
import styles from "./Resume.module.scss";
import React, { useEffect } from "react";
import JobCardHeader from "../JobCardHeader";
import JobCardDetail from "../JobCardDetail";
import ResumeForm from "./ResumeForm";
import { useGetAboutUsJoinUs } from "@/apis/strapi-client/strapi";
import { useParams } from "next/navigation";

const Resume = () => {
  const params = useParams();
  const { data: aboutUsJoinUs, runAsync: getAboutUsJoinUs } =
    useGetAboutUsJoinUs();

  useEffect(() => {
    if (+params?.id) {
      getAboutUsJoinUs({
        populate: "*",
        sort: ["order:desc"],
        filters: {
          id: {
            $eq: +params?.id,
          },
        },
      });
    }
  }, [+params?.id]);

  return (
    <>
      <div className={styles.resumeContainer}>
        <div className={`${styles.resume} container`}>
          <Card className={styles.cardContainer}>
            <JobCardHeader showExpandBtn={false} data={aboutUsJoinUs?.[0]} />
            <JobCardDetail data={aboutUsJoinUs?.[0]} />
            <ResumeForm />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Resume;
