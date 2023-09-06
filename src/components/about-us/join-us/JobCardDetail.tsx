import { Space, Typography, Divider, List } from "antd";
import styles from "./JobCardDetail.module.scss";
import { GetAboutUsJoinUs } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { XStarViewer } from "@/utils/x-star-editor-beta";
import { viewerVideoPlugin } from "@/utils/x-star-editor-beta/plugins/viewer-video";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

interface Props {
  data: StrapiResponseDataItem<GetAboutUsJoinUs> | undefined;
}

const JobCardDetail = ({ data }: Props) => {
  const { lang } = useLang();

  return (
    <>
      <div className={styles.cardListContainer}>
        <Divider style={{ borderColor: "#FFAD11" }} className={styles.divider}/>
        <div>
          <XStarViewer
            className={styles.viewer}
            value={getTransResult(
              lang,
              data?.attributes?.contentZh,
              data?.attributes?.contentEn
            )}
            plugins={[viewerVideoPlugin()]}
          />
        </div>
      </div>
    </>
  );
};

export default JobCardDetail;
