"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import UsacoIntro from "./introduction";
import RelateResources from "./relate-resources";
import Testimony from "@/components/home/Testimony";
import {
  useGetResourcesLiveSolution,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { GetResourcesLiveSolution } from "@/apis/strapi-client/define";
const { Content } = Layout;

const UsacoLiveSolutions = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony({
    ready: true,
    pageName: [pathname],
  });
  const { data: resourcesLiveSolution } = useGetResourcesLiveSolution();

  //让 Bronze Golden Silver 按照 Golden Silver Bronze 排序
  const resort = (resourcesLiveSolution : StrapiResponseDataItem<GetResourcesLiveSolution>[][] | undefined) => {
    if(resourcesLiveSolution){
      const firstItem = resourcesLiveSolution?.shift();
      resourcesLiveSolution?.push(firstItem || []);
      return resourcesLiveSolution
    }
    return [];
  }
  
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.usacoLiveSolutions}>
        <Content>
          <TopBanner />
          <UsacoIntro data={resort(resourcesLiveSolution)} />
          <RelateResources />
          <Testimony
            className={styles.comments}
            testimonyData={testimonyData}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default UsacoLiveSolutions;
