import { GetJoinUs } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { viewerVideoPlugin } from '@/utils/x-star-editor/plugins/viewer-video';
import { Divider } from 'antd';
import React from 'react';
import { XStarMdViewer } from 'x-star-editor';
import styles from './index.module.scss';

interface JobCardDetailProps {
  data: StrapiResponseDataItem<GetJoinUs> | undefined;
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
