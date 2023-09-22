'use client';
import { GetResourcesLiveSolution } from '@/apis/strapi-client/define';
import { useGetResourcesLiveSolution, useGetReviews } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import Reviews from '@/components/common/reviews';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from './banner';
import styles from './index.module.scss';
import UsacoIntro from './introduction';
import RelateResources from './relate-resources';

const { Content } = Layout;

const UsacoLiveSolutions: React.FC = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  const { data: resourcesLiveSolution } = useGetResourcesLiveSolution();

  //让 Bronze Golden Silver 按照 Golden Silver Bronze 排序
  const resort = (resourcesLiveSolution: StrapiResponseDataItem<GetResourcesLiveSolution>[][] | undefined) => {
    if (resourcesLiveSolution) {
      const firstItem = resourcesLiveSolution?.shift();
      resourcesLiveSolution?.push(firstItem || []);
      return resourcesLiveSolution;
    }
    return [];
  };

  return (
    <Layout className={styles.usacoLiveSolutions}>
      <Content>
        <Banner />
        <UsacoIntro data={resort(resourcesLiveSolution)} />
        <RelateResources />
        <Reviews className={styles.comments} reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default UsacoLiveSolutions;
