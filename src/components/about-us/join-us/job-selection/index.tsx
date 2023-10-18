import { AboutUsJoinUsCategory } from '@/apis/strapi-client/define';
import { useGetAboutUsJoinUs } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { Button, Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import JobCard from './job-card';

const JobSelection: React.FC = () => {
  const { format: t, lang } = useLang();
  const [category, setCategory] = useState<AboutUsJoinUsCategory>(AboutUsJoinUsCategory.PartTime);
  const { data: aboutUsJoinUs, runAsync: getAboutUsJoinUs } = useGetAboutUsJoinUs(category);

  useEffect(() => {
    getAboutUsJoinUs({
      populate: '*',
      sort: ['order:desc'],
      filters: {
        category: {
          $eq: category
        }
      }
    });
  }, [category]);

  const categoryOptions = [
    {
      label: t('FullTime'),
      value: AboutUsJoinUsCategory.FullTime
    },
    {
      label: t('PartTime'),
      value: AboutUsJoinUsCategory.PartTime
    },
    {
      label: t('XTutor'),
      value: AboutUsJoinUsCategory.XTutor
    }
  ];
  return (
    <div className={styles.jobSelectionContainer}>
      <div className={`${styles.jobSelection} container`}>
        <div className={styles.btnContainer}>
          {categoryOptions?.map((item) => (
            <Button key={item?.value} className={`${styles.choiceBtn} ${category === item?.value ? styles.selectedBtn : ''}`} onClick={() => setCategory(item?.value)}>
              {item?.label}
            </Button>
          ))}
        </div>

        <div className={styles.jobCardContainer}>
          {aboutUsJoinUs?.length !== 0 ? (
            aboutUsJoinUs?.map((v, index) => <JobCard key={v?.id} index={index} data={v} />)
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={getTransResult(lang, '目前暂无职位', 'There are currently no positions')} />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSelection;
