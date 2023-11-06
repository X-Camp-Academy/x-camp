import { GetFaq } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import QACard from '@/components/common/q&a';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import React from 'react';
import styles from './index.module.scss';

interface FaqsProps {
  title: string;
  data: StrapiResponseDataItem<GetFaq>[] | undefined;
}

const Faqs: React.FC<FaqsProps> = ({ title, data }) => {
  const { lang } = useLang();
  return (
    <div className={`${styles.campFAQS} container`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.cardContent}>
        {data?.map((item, index) => (
          <QACard
            key={'referral' + index}
            question={getTransResult(lang, item?.attributes.questionZh, item?.attributes.questionEn)!}
            answer={getTransResult(lang, item?.attributes.answerZh, item?.attributes.answerEn)!}
            index={index}
            className={styles.qaCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
