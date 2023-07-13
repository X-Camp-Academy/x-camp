import { Button } from "antd";
import styles from "./JobSelection.module.scss";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { useGetAboutUsJoinUs } from "@/apis/strapi-client/strapi";
import { AboutUsJoinUsCategory } from "@/apis/strapi-client/define";

const JobSelection = () => {
  const [category, setCategory] = useState<AboutUsJoinUsCategory>(
    AboutUsJoinUsCategory.PartTime
  );
  const { data: aboutUsJoinUs, runAsync: getAboutUsJoinUs } =
    useGetAboutUsJoinUs(category);

  useEffect(() => {
    getAboutUsJoinUs({
      populate: "*",
      sort: ["order:desc"],
      filters: {
        category: {
          $eq: category,
        },
      },
    });
  }, [category]);

  return (
    <>
      <div className={styles.jobSelectionContainer}>
        <div className={`${styles.jobSelection} container`}>
          <div className={styles.btnContainer}>
            {[
              AboutUsJoinUsCategory.PartTime,
              AboutUsJoinUsCategory.FullTime,
              AboutUsJoinUsCategory.XTutor,
            ]?.map((v) => (
              <Button
                key={v}
                className={`${styles.choiceBtn} ${
                  category === v ? styles.selectedBtn : ""
                }`}
                onClick={() => setCategory(v)}
              >
                {v}
              </Button>
            ))}
          </div>

          <div className={styles.jobCardContainer}>
            {aboutUsJoinUs?.map((v, index) => (
              <JobCard key={index} index={index} data={v} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSelection;
