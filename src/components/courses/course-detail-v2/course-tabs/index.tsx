import { FrequencyCategory } from '@/apis/strapi-client/define';
import { useGlobalState } from '@/hoc/WithGlobalState';
import { formatFinance } from '@/utils/public';
import { Affix } from 'antd';
import Head from 'next/head';
import { useContext, useState } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

interface tabListIProps {
  title: string;
  key: string;
}

const tabList: Array<tabListIProps> = [
  {
    title: 'Introduction',
    key: 'introduction'
  },
  {
    title: 'Topic Covered',
    key: 'topic-covered'
  },
  {
    title: 'Service',
    key: 'service'
  },
  {
    title: 'Faculty & Coaches',
    key: 'faculty-coaches'
  },
  {
    title: 'FAQ',
    key: 'faq'
  },
  {
    title: 'Reviews',
    key: 'reviews'
  }
];

const CourseTabs = () => {
  const { navVisible, setNavVisible } = useGlobalState();

  const [selected, setSelected] = useState('introduction');
  const courseData = useContext(CourseClassesContext);
  const { frequency, tuitionUSD, tuitionRMB } = courseData?.attributes ?? {};

  return (
    <>
      <Head>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>

      <div className={`${navVisible && 'container'}`}>
        <Affix offsetTop={0} onChange={(affixed) => setNavVisible(!affixed)}>
          <div className={`${!navVisible && styles.nav}`}>
            <div className={styles.titleTab}>
              {tabList.map((item) => {
                return (
                  <div
                    onClick={() => {
                      setSelected(item.key);
                      document.getElementById(item.key)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest'
                      });
                    }}
                    className={styles.contentTitle}
                    key={item.key}
                  >
                    <div className={`${styles.contentText} ${item.key === selected && styles.selectedTab}`}>{item.title}</div>
                  </div>
                );
              })}
            </div>
            {!navVisible && <div className={styles.price}>{frequency === FrequencyCategory.Once ? 'Free' : tuitionUSD ? `$${formatFinance(tuitionUSD)}` : `￥${formatFinance(tuitionRMB)}`}</div>}
          </div>
        </Affix>
      </div>
    </>
  );
};

export default CourseTabs;
