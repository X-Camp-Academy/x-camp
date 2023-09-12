import { Divider } from "antd";
import styles from "./JobCardDetail.module.scss";
import { GetAboutUsJoinUs } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { XStarMdViewer } from "x-star-editor";
import { viewerVideoPlugin } from "@/utils/x-star-editor/plugins/viewer-video";
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
        <Divider style={{ borderColor: "#FFAD11" }} className={styles.divider} />
        <div>
          <XStarMdViewer
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
