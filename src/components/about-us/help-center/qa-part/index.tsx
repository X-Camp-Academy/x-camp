'use client';
import { useGetFaq } from '@/apis/strapi-client/strapi';
import QACard from '@/components/common/q&a';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title } = Typography;

const QAPart: React.FC = () => {
  const { lang } = useLang();
  const { data: faq } = useGetFaq({
    ready: true,
    isClassify: true
  });

  return (
    <div className={`${styles.qaContent} container`}>
      {faq?.map((v, index) => (
        <React.Fragment key={v[index]?.id}>
          <Title className={styles.title}>{v?.[0]?.attributes?.category}</Title>
          {v?.map((g, index) => (
            <QACard
              key={g?.id}
              question={getTransResult(lang, g?.attributes.questionZh, g?.attributes.questionEn)!}
              answer={getTransResult(lang, g?.attributes.answerZh, g?.attributes.answerEn)!}
              index={index}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default QAPart;
