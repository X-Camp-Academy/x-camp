import { useGetJoinUs } from '@/apis/strapi-client/strapi';
import { Card } from 'antd';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import JobCardDetail from '../../job-selection/job-card/job-card-detail';
import JobCardHeader from '../../job-selection/job-card/job-card-header';
import ResumeForm from '../resume-form';
import styles from './index.module.scss';

const Resume: React.FC = () => {
  const params = useParams();

  const { data, runAsync: getJoinUs } = useGetJoinUs();

  useEffect(() => {
    if (params?.id) {
      getJoinUs({
        populate: '*',
        sort: ['order:desc'],
        filters: {
          id: {
            $eq: +params?.id
          }
        }
      });
    }
  }, [params?.id]);

  return (
    <div className={`${styles.resumeContainer} container`}>
      <Card className={styles.card}>
        <JobCardHeader showExpandBtn={false} data={data?.[0]} />
        <JobCardDetail data={data?.[0]} />
        <ResumeForm job={data?.[0].attributes.titleEn} department={data?.[0].attributes.descriptionEn} />
      </Card>
    </div>
  );
};

export default Resume;
