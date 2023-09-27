import { GetAboutUsJoinUs } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import ColorfulCard from '@/components/common/colorful-card';
import { Collapse } from 'antd';
import styles from './index.module.scss';
import JobCardDetail from './job-card-detail';
import JobCardHeader from './job-card-header';

const { Panel } = Collapse;

interface JobCardProps {
  index: number;
  data: StrapiResponseDataItem<GetAboutUsJoinUs>;
}

const JobCard: React.FC<JobCardProps> = ({ index, data }) => {
  return (
    <ColorfulCard border="bottom" index={index} collapse animate={false} className={styles.ColorfulCardContainer}>
      <Panel header={<JobCardHeader data={data} />} key={index} showArrow={false}>
        <JobCardDetail data={data} />
      </Panel>
    </ColorfulCard>
  );
};

export default JobCard;
