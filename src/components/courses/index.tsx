"use client";
import { Collapse, ConfigProvider, Divider, Layout, Space } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./catalog/top-banner";
import { CaretRightOutlined, DownOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { COURSE_TYPES } from "./define";
import Testimony from "../home/Testimony";
import dynamic from "next/dynamic";
import ClassCard from "../common/class-card";
import {
  useGetCourseLevelType,
  useGetCourses,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
const AnchorNav = dynamic(() => import("./AnchorNav"), { ssr: false });
const { Panel } = Collapse;
const { Content } = Layout;

const Courses = () => {
  const pathname = usePathname();
  const { lang } = useLang();
  const { data: courseLevelType } = useGetCourseLevelType();
  const { data: courses } = useGetCourses();

  const getLangResult = (
    lang: "zh" | "en",
    zhData: string[],
    enData: string[]
  ) => {
    if (zhData === null && enData === null) {
      return [];
    } else {
      if (lang === "zh") {
        return zhData ? zhData : enData;
      } else {
        return enData ? enData : zhData;
      }
    }
  };

  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony({
    ready: true,
    pageName: [pathname],
  });
  // 获取所有的courseLevelType分类
  const courseLevelTypeData = courseLevelType?.map(
    (item) => item?.attributes?.type
  );

  const courseLevelTypeMap = new Map();
  courseLevelTypeData?.forEach((item) => {
    courseLevelTypeMap.set(item, []);
  });

  courses?.forEach((item) => {
    const key = item?.attributes?.courseLevelType?.data?.attributes?.type;
    const value = courseLevelTypeMap.get(key);
    value?.push(item);
    courseLevelTypeMap.set(key, value);
  });

  courseLevelTypeMap.forEach((value, key) => {
    // 在这里对每个键值对执行操作
    // console.log(key, value);
  });

  // console.log(courses);

  const getOnlineInPersonIsCamp = (type: string) => {
    switch (type) {
      case "Online Courses":
        return courses?.filter(
          (item) => item?.attributes?.classMode === "Online Live"
        );
      case "In-person Classes":
        return courses?.filter(
          (item) => item?.attributes?.classMode === "In-person"
        );
      case "is Camp":
        return courses?.filter((item) => item?.attributes?.isCamp);
      default:
        return courses;
    }
  };

  const generateCourses = (
    courseType: string,
    primaryData: string[] | undefined
  ) => {
    const filteredCourses = getOnlineInPersonIsCamp(courseType);
    return {
      primaryTitle: courseType,
      children: primaryData?.map((levelType) => {
        return {
          secondaryTitle: levelType,
          children: filteredCourses?.filter(
            // 根据第一次分类过滤的courses或者原始的课程直接进行二层过滤
            (filteredCourse) =>
              filteredCourse?.attributes?.courseLevelType?.data?.attributes
                ?.type === levelType
          ),
        };
      }),
    };
  };

  const allCourses = COURSE_TYPES.map((courseType, index) => {
    if (index < 3) {
      return generateCourses(courseType, courseLevelTypeData);
    } else {
      return generateCourses(courseType, [courseType]);
    }
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.courses}>
        <Content>
          <TopBanner />

          <div className={`${styles.classContainer} container`}>
            {allCourses?.map((item, index) => {
              return (
                <div
                  className={"classify"}
                  id={"classify" + index}
                  key={item?.primaryTitle}
                >
                  <Collapse
                    defaultActiveKey={"classifyCollapse" + index}
                    ghost
                    expandIconPosition={"end"}
                    expandIcon={({ isActive }) => (
                      <div className={styles.changeBtn}>
                        <DownOutlined
                          rotate={isActive ? 180 : 0}
                          className={styles.icon}
                        />
                      </div>
                    )}
                  >
                    <Panel
                      key={"classifyCollapse" + index}
                      header={
                        <div className={styles.title}>{item?.primaryTitle}</div>
                      }
                    >
                      <>
                        {item?.children?.map((v) => {
                          return (
                            <Collapse
                              key={v?.secondaryTitle}
                              defaultActiveKey={v?.secondaryTitle}
                              ghost
                              style={{ marginBottom: 30 }}
                              expandIcon={({ isActive }) => (
                                <CaretRightOutlined
                                  rotate={isActive ? 90 : 0}
                                />
                              )}
                            >
                              <Panel
                                key={v?.secondaryTitle}
                                header={
                                  <div className={styles.panelTitle}>
                                    {v?.secondaryTitle}
                                  </div>
                                }
                              >
                                <Space
                                  size={27}
                                  style={{ width: "100%", flexWrap: "wrap" }}
                                >
                                  {v?.children?.map((g, index) => {
                                    return (
                                      <ClassCard
                                        key={g?.id}
                                        border={"bottom"}
                                        index={index}
                                        animate={false}
                                        title={`${
                                          g?.attributes?.courseCode
                                        }: ${getTransResult(
                                          lang,
                                          g?.attributes?.courseTitleZh,
                                          g?.attributes?.courseTitleEn
                                        )}`}
                                        list={getLangResult(
                                          lang,
                                          g?.attributes
                                            ?.courseShortDescriptionZh,
                                          g?.attributes
                                            ?.courseShortDescriptionEn
                                        )}
                                        time={`${g.attributes?.lessonNum} ${
                                          g?.attributes?.frequency === "Weekly"
                                            ? "weeks"
                                            : "days"
                                        }`}
                                        href={`/courses/detail/${g?.id}`}
                                      />
                                    );
                                  })}
                                </Space>
                              </Panel>
                            </Collapse>
                          );
                        })}
                      </>
                    </Panel>
                  </Collapse>
                  <Divider className={styles.divider} />
                </div>
              );
            })}
          </div>

          <Testimony testimonyData={testimonyData} />
          <AnchorNav />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Courses;
