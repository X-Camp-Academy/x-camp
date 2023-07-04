import { Collapse } from "antd";
import styles from "./JobCard.module.scss";
import JobCardHeader from "./JobCardHeader";
import JobCardDetail from "./JobCardDetail";
import CollapseColorfulCard from "@/components/common/collapse-colorful-card";
import { GetAboutUsJoinUs } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
const { Panel } = Collapse;

interface Props {
  index: number;
  data: StrapiResponseDataItem<GetAboutUsJoinUs>;
}

const JobCard = ({ index, data }: Props) => {
  return (
    <>
      <CollapseColorfulCard
        border="bottom"
        index={index}
        className={styles.ColorfulCardContainer}
      >
        <Panel
          header={<JobCardHeader data={data} />}
          key={index}
          showArrow={false}
        >
          <JobCardDetail data={data} />
        </Panel>
      </CollapseColorfulCard>
    </>
  );
};

export default JobCard;
