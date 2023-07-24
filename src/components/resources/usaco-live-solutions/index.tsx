"use client";
import { Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import UsacoIntro from "./introduction";
import RelateResources from "./relate-resources";
import Reviews from "@/components/common/reviews";
import {
  useGetResourcesLiveSolution,
  useGetReviews,
} from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { GetResourcesLiveSolution } from "@/apis/strapi-client/define";
const { Content } = Layout;

const UsacoLiveSolutions = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });
  const { data: resourcesLiveSolution } = useGetResourcesLiveSolution();

  //让 Bronze Golden Silver 按照 Golden Silver Bronze 排序
  const resort = (resourcesLiveSolution: StrapiResponseDataItem<GetResourcesLiveSolution>[][] | undefined) => {
    if (resourcesLiveSolution) {
      const firstItem = resourcesLiveSolution?.shift();
      resourcesLiveSolution?.push(firstItem || []);
      return resourcesLiveSolution
    }
    return [];
  }

  return (
    <Layout className={styles.usacoLiveSolutions}>
      <Content>
        <TopBanner />
        <UsacoIntro data={resort(resourcesLiveSolution)} />
        <RelateResources />
        <Reviews
          className={styles.comments}
          reviewsData={reviewsData}
        />
      </Content>
    </Layout>
  );
};

export default UsacoLiveSolutions;
