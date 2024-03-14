import { GetFaq } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import QACard from '@/components/common/q&a';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import React from 'react';
import styles from './index.module.scss';

interface FaqsProps {
  className?: string;
  titleClassName?: string;
  id?: string;
  title: string;
  data: StrapiResponseDataItem<GetFaq>[] | undefined;
}

const Faqs: React.FC<FaqsProps> = ({ className, titleClassName, id, title, data }) => {
  const { lang } = useLang();
  return (
    <div className={`${className} ${styles.campFAQS} container`}>
      <div className={`${styles.title} ${titleClassName}`} id={id}>
        {title}
      </div>
      <div className={styles.cardContent}>
        {data?.map((item, index) => (
          <QACard
            key={item?.id}
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
