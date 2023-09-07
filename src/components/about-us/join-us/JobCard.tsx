import { Collapse } from "antd";
import styles from "./JobCard.module.scss";
import JobCardHeader from "./JobCardHeader";
import JobCardDetail from "./JobCardDetail";
import ColorfulCard from "@/components/common/colorful-card";
import { GetAboutUsJoinUs } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
const { Panel } = Collapse;

interface JobCardProps {
  index: number;
  data: StrapiResponseDataItem<GetAboutUsJoinUs>;
}

const JobCard: React.FC<JobCardProps> = ({ index, data }) => {
  return (
    <ColorfulCard
      border="bottom"
      index={index}
      collapse
      animate={false}
      className={styles.ColorfulCardContainer}
    >
      <Panel
        header={<JobCardHeader data={data} />}
        key={index}
        showArrow={false}
      >
        <JobCardDetail data={data} />
      </Panel>
    </ColorfulCard>
  );
};

export default JobCard;
