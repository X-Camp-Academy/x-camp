"use client";
import { Collapse, ConfigProvider, Divider, Layout, Space } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./catalog/top-banner";
import { CaretRightOutlined, DownOutlined } from "@ant-design/icons";
import { classesData } from "./define";
import Testimony from "../home/Testimony";
import dynamic from "next/dynamic";
import ClassCard from "../common/class-card";
import {
  useGetCourseLevelType,
  useGetCourses,
} from "@/apis/strapi-client/strapi";
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

const Courses = () => {
  const { data: courseLevelType } = useGetCourseLevelType();
  const { data: courses } = useGetCourses();

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
  console.log(courses);

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
