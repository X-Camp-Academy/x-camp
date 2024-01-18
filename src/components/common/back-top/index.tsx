'use client';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { useScroll } from 'ahooks';
import React from 'react';
import styles from './index.module.scss';

const BackTop: React.FC = () => {
  const scroll = useScroll(document);
  const scrollToTop = () => {
    const rootElement = document.documentElement || document.body;
    rootElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return scroll && scroll?.top > 500 ? (
    <div className={styles.backTop} onClick={scrollToTop}>
      <VerticalAlignTopOutlined className={styles.icon} />
    </div>
  ) : (
    <></>
  );
};

export default BackTop;
