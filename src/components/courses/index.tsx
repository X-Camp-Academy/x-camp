"use client";
import { Collapse, ConfigProvider, Divider, Layout, Space } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./catalog/top-banner";
import { CaretRightOutlined, DownOutlined } from "@ant-design/icons";
import { COURSE_TYPES, classesData } from "./define";
import Testimony from "../home/Testimony";
import dynamic from "next/dynamic";
import ClassCard from "../common/class-card";
import {
  useGetClasses,
  useGetCourseLevelType,
  useGetCourses,
} from "@/apis/strapi-client/strapi";
import { GetCourses } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
const AnchorNav = dynamic(() => import("./AnchorNav"), { ssr: false });
const { Panel } = Collapse;
const { Content } = Layout;

interface ClassesProps {
  title: string;
  children: {
    header: string;
    children: {
      id: number;
      title: string;
      desc: string;
      duration: string;
    }[];
  }[];
}

const Courses: React.FC = () => {
  const { data: courseLevelType } = useGetCourseLevelType();
  const { data: courses } = useGetCourses();
  const { data: classes } = useGetClasses();
  // 获取所有的courseLevelType分类
  const courseLevelTypeData = courseLevelType?.map(
    (item) => item?.attributes?.type
  );

  console.log(courseLevelTypeData);
  
  // 第二次分类
  // 根据已经过滤的courses或者原始的课程直接进行二层过滤
  const getDataByCourseLevelType = (
    courses: StrapiResponseDataItem<GetCourses>[] | undefined,
    type: string
  ) => {
    return courses?.filter(
      (item) =>
        item?.attributes?.courseLevelType?.data?.attributes?.type === type
    );
  };

  const campsCourses = courses?.filter((item) => item?.attributes?.isCamp);
  const campsCoursesData = courseLevelTypeData?.map((levelType) => {
    return {
      bigTitle: levelType,
      children: getDataByCourseLevelType(campsCourses, levelType),
    };
  });

  console.log(campsCoursesData);

  const singleLayerCourses = COURSE_TYPES.slice(3).map((item) => {
    return {
      title: item,
      children: getDataByCourseLevelType(courses, item),
    };
  });

  console.log(singleLayerCourses);

  // 初始化所有分类的value
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

  // 根据course自身的属性第一次分类

  // console.log(campsCourse);

  // console.log(courseLevelTypeMap);
  const repeatSort = ["Online Courses", "In-person Classes", "Camps"];
  const allData = COURSE_TYPES.slice(2)?.map((item) => {
    if (repeatSort.includes(item)) {
    } else {
      return {
        bigTitle: item,
        children: courseLevelTypeMap.get(item),
      };
    }
  });

  courseLevelTypeMap.forEach((value, key) => {
    // 在这里对每个键值对执行操作
    // console.log(key, value);
  });
  const getCourseLevelType = () => {};
  // console.log(courses);
  // console.log(courseLevelTypeMap);

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
            {classesData.map((item, index) => {
              return (
                <div
                  className={"classify"}
                  id={"classify" + index}
                  key={item.title}
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
                      header={<div className={styles.title}>{item.title}</div>}
                    >
                      <>
                        {item.children.map((v) => {
                          return (
                            <Collapse
                              key={v.header}
                              defaultActiveKey={v.header}
                              ghost
                              style={{ marginBottom: 30 }}
                              expandIcon={({ isActive }) => (
                                <CaretRightOutlined
                                  rotate={isActive ? 90 : 0}
                                />
                              )}
                            >
                              <Panel
                                key={v.header}
                                header={
                                  <div className={styles.panelTitle}>
                                    {v.header}
                                  </div>
                                }
                              >
                                <Space
                                  size={27}
                                  style={{ width: "100%", flexWrap: "wrap" }}
                                >
                                  {v.children.map((g, index) => {
                                    return (
                                      <ClassCard
                                        key={g.id}
                                        border={"bottom"}
                                        index={index}
                                        animate={false}
                                        title="CS100P: Python Intro with Creative Projects"
                                        list={[
                                          "6th+ Graders. No prior coding expected…",
                                        ]}
                                        time="10 weeks"
                                        href={`/courses/detail?courseId=${g.id}`}
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

          <Testimony />
          <AnchorNav />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Courses;
