import { FrequencyCategory } from '@/apis/strapi-client/define';
import NavTools from '@/components/common/nav/nav-tools';
import { useGlobalState } from '@/hoc/WithGlobalState';
import { formatFinance } from '@/utils/public';
import { useInViewport, useMemoizedFn } from 'ahooks';
import { BasicTarget } from 'ahooks/lib/utils/domTarget';
import { Affix } from 'antd';
import Head from 'next/head';
import { useContext, useMemo, useState } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

interface tabListIProps {
  title: string;
  key: string;
}

const tabs: Array<tabListIProps> = [
  {
    title: 'Introduction',
    key: 'introduction'
  },
  {
    title: 'Topics Covered',
    key: 'topics-covered'
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

  const tabList = useMemo(() => {
    let res = tabs;
    if (!courseData?.attributes?.reviews?.data?.length) {
      res = tabs.filter((v) => v.key !== 'reviews');
    }
    return res;
  }, [courseData]);

  const callback = useMemoizedFn((entry) => {
    if (entry.isIntersecting) {
      const active = entry.target.getAttribute('id') || '';
      setSelected(active);
    }
  });

  const handleMenuClick = (key: string) => {
    const element = document.getElementById(key);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  useInViewport([...document.getElementsByClassName('tabContent')] as unknown as BasicTarget[], {
    callback
  });

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
        <Affix offsetTop={0} onChange={(affixed) => setNavVisible(!affixed)} className={`${!navVisible && styles.navContainer}`}>
          <div className={styles.nav}>
            <div className={styles.titleTab}>
              {tabList.map((item) => {
                return (
                  <div onClick={() => handleMenuClick(item.key)} className={styles.contentTitle} key={item.key}>
                    <div className={`${styles.contentText} ${item.key === selected && styles.selectedTab}`}>{item.title}</div>
                  </div>
                );
              })}
            </div>
            {!navVisible && (
              <div className={styles.tools}>
                <div className={styles.price}>{frequency === FrequencyCategory.Once ? 'Free' : tuitionUSD ? `$${formatFinance(tuitionUSD)}` : `￥${formatFinance(tuitionRMB)}`}</div>
                <NavTools />
              </div>
            )}
          </div>
        </Affix>
      </div>
    </>
  );
};

export default CourseTabs;
