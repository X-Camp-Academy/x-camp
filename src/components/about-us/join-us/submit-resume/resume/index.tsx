import { useGetAboutUsJoinUs } from '@/apis/strapi-client/strapi';
import { Card } from 'antd';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import JobCardHeader from '../../job-selection/job-card/iob-card-header';
import JobCardDetail from '../../job-selection/job-card/job-card-detail';
import ResumeForm from '../resume-form';
import styles from './index.module.scss';

const Resume: React.FC = () => {
  const params = useParams();

  const { data: aboutUsJoinUs, runAsync: getAboutUsJoinUs } = useGetAboutUsJoinUs();

  useEffect(() => {
    if (params?.id) {
      getAboutUsJoinUs({
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
    <div className="container">
      <Card className={styles.cardContainer} bodyStyle={{ padding: '36px' }}>
        <JobCardHeader showExpandBtn={false} data={aboutUsJoinUs?.[0]} />
        <JobCardDetail data={aboutUsJoinUs?.[0]} />
        <ResumeForm job={aboutUsJoinUs?.[0].attributes.titleEn} department={aboutUsJoinUs?.[0].attributes.descriptionEn} />
      </Card>
    </div>
  );
};

export default Resume;
