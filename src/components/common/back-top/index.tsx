'use client';
import React from 'react';
import { useScroll } from 'ahooks';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const BackTop: React.FC = () => {
  const scroll = useScroll(document);
  console.log(scroll);

  const scrollToTop = () => {
    // 获取根元素
    const rootElement = document.documentElement || document.body;

    // 滚动根元素到顶部
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
