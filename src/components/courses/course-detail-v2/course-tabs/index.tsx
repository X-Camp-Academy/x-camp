import Head from 'next/head';
import { useState } from 'react';
import styles from './index.module.scss';

interface tabListIProps {
  title: string;
  key: string;
}

const CourseTabs = () => {
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
  const [selected, setSelected] = useState('introduction');

  return (
    <>
      <Head>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>
      <div className={'container'}>
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
                style={{
                  borderBottom: item.key === selected ? '6px #FFAD11 solid' : ''
                }}
                className={styles.contentTitle}
                key={item.key}
              >
                <div className={styles.contentText} style={{ color: item.key === selected ? '#FFAD11' : '' }}>
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CourseTabs;
