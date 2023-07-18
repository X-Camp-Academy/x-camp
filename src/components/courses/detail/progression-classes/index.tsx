import React, { useContext } from "react";
import styles from "./index.module.scss";
import ClassCard from "@/components/common/class-card";
import { Space, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import CourseClassesContext from "../CourseClasses";
import { useParams } from "next/navigation";
import { useGetCourses } from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { getLangResult } from "../../utils";
const { Title } = Typography;

const ProgressionClasses = () => {
  // const Data = useContext(CourseClassesContext);

  const params = useParams();
  const { format: t, lang } = useLang();

  const { data: courseData } = useGetCourses({
    filters: {
      id: { $eq: Number(params?.courseId) },
    },
  });

  const data = courseData?.data[0]?.attributes?.recommendedClasses?.data;
  const recommendedCourses = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);

  return (
    <div className={styles.content}>
      <div className="container">
        <Title className={styles.title}>{t("ProgressionClasses")}</Title>
        <Space size={24} wrap className={styles.cards}>
          {recommendedCourses?.map((v, index) => {
            return (
              <ClassCard
                key={v?.id}
                border={"bottom"}
                index={index}
                animate={false}
                title={`${v?.attributes?.courseCode
                  }: ${getTransResult(
                    lang,
                    v?.attributes?.courseTitleZh,
                    v?.attributes?.courseTitleEn
                  )}`}
                list={getLangResult(
                  lang,
                  v?.attributes
                    ?.courseShortDescriptionZh,
                  v?.attributes
                    ?.courseShortDescriptionEn
                )}
                time={`${v?.attributes?.lessonNum} ${v?.attributes?.frequency ===
                  "Weekly"
                  ? "weeks"
                  : "days"
                  }`}
                href={`/courses/detail/${v?.id}`}
              />
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default ProgressionClasses;
