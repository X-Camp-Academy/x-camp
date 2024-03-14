import { FrequencyCategory } from '@/apis/strapi-client/define';
import { useGlobalState } from '@/hoc/WithGlobalState';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatFinance } from '@/utils/public';
import { useInViewport, useMemoizedFn } from 'ahooks';
import { Affix, Button } from 'antd';
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
    title: 'FAQS',
    key: 'faqs'
  },
  {
    title: 'Reviews',
    key: 'reviews'
  }
];

const mobileTabs: Array<tabListIProps> = [
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
    title: 'Coaches',
    key: 'faculty-coaches'
  }
];

const CourseTabs = () => {
  const { format: t } = useLang();
  const { setNavVisible } = useGlobalState();
  const isMobile = useMobile();
  const [selected, setSelected] = useState<string>('');
  const courseData = useContext(CourseClassesContext);
  const { affix, setAffix } = courseData ?? {};
  const { frequency, tuitionUSD, tuitionRMB, registerLink } = courseData?.attributes ?? {};

  const tabList = useMemo(() => {
    if (isMobile) {
      return mobileTabs;
    }
    let res = tabs;
    if (!courseData?.attributes?.reviews?.data?.length) {
      res = tabs.filter((v) => v.key !== 'reviews');
    }
    return res;
  }, [courseData, isMobile]);

  const callback = useMemoizedFn((entry) => {
    const id = entry.target.getAttribute('id') || '';
    if (entry.isIntersecting) {
      setSelected(id);
    }
  });

  const handleMenuClick = (key: string) => {
    const element = document.getElementById(key);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  (useInViewport as any)([...document.getElementsByClassName('tabTitle')], {
    callback,
    rootMargin: '-120px 0px -80px 0px',
    threshold: 0.5
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

      <div className={`${affix ? '' : 'container'}`}>
        <Affix
          offsetTop={0}
          onChange={(affixed) => {
            setNavVisible(!affixed);
            setAffix?.(!!affixed);
          }}
          className={`${affix ? styles.navContainer : ''}`}
        >
          <div className={styles.nav}>
            <div className={styles.titleTab}>
              {tabList.map((item) => {
                return (
                  <div onClick={() => handleMenuClick(item.key)} className={styles.contentTitle} key={item.key}>
                    <div className={`${styles.contentText} ${selected === item.key ? styles.selectedTab : ''}`}>{item.title}</div>
                  </div>
                );
              })}
            </div>
            {affix && (
              <div className={styles.tools}>
                <div className={styles.price}>{frequency === FrequencyCategory.Once ? 'Free' : tuitionUSD ? `$${formatFinance(tuitionUSD)}` : `￥${formatFinance(tuitionRMB)}`}</div>
                <Button type="primary" className={styles.btn} onClick={() => window.open(registerLink)}>
                  {t('SignUpNow')}
                </Button>
              </div>
            )}
          </div>
        </Affix>
      </div>
    </>
  );
};

export default CourseTabs;
