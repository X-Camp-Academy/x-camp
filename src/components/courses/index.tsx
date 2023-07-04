"use client";
import { Collapse, ConfigProvider, Divider, Layout, Space } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./catalog/top-banner";
import { CaretRightOutlined, DownOutlined } from "@ant-design/icons";
import { useSearchParams } from "next/navigation";
import { classesData } from "./define";
import Testimony from "../home/Testimony";
// import AnchorNav from './AnchorNav';
import dynamic from "next/dynamic";
import ClassCard from "../common/class-card";
const AnchorNav = dynamic(() => import("./AnchorNav"), { ssr: false });
const { Panel } = Collapse;
const { Content } = Layout;

const Courses = () => {
  const params = useSearchParams();
  const courseId = params?.get("courseId");
  console.log("courseId", courseId);

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
