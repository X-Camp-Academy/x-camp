import { GetAboutUsJoinUs } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { viewerVideoPlugin } from '@/utils/x-star-editor/plugins/viewer-video';
import { Divider } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const XStarMdViewer = dynamic(() => import('x-star-editor').then((v) => v.XStarMdViewer), {
  ssr: false
});

interface JobCardDetailProps {
  data: StrapiResponseDataItem<GetAboutUsJoinUs> | undefined;
}

const JobCardDetail: React.FC<JobCardDetailProps> = ({ data }) => {
  const { lang } = useLang();

  return (
    <div className={styles.cardListContainer}>
      <Divider style={{ borderColor: '#FFAD11' }} className={styles.divider} />
      <div>
        <XStarMdViewer className={styles.viewer} value={getTransResult(lang, data?.attributes?.contentZh, data?.attributes?.contentEn)} plugins={[viewerVideoPlugin()]} />
      </div>
    </div>
  );
};

export default JobCardDetail;
