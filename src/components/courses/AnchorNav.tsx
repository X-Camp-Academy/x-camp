import React, { useEffect } from 'react';
import styles from './AnchorNav.module.scss';
import { Space } from 'antd';
import { classesData } from './define';
import { useScroll } from 'ahooks';
const AnchorNav = () => {
  /**
   * 将对应组件滚动到视口
   */
  const scrollToComponent = (id: string) => {
    const component = document.getElementById(id);
    component?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const scroll = useScroll(window.document);
  useEffect(() => {
    // 获取所有锚点元素
    const elements = document.getElementsByClassName('classify');
    const clientHeight = document.documentElement.clientHeight;
    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect();
      // 获取所有与当前锚点对应的锚点元素
      const anchors = document.getElementsByClassName(
        `catalogs-${elements[i].id}`
      );
      // 如果当前锚点不在容器内，则为其对应的所有锚点元素添加 .anchorItemInactive 类名，并移除 .anchorItemActive 类名
      if (rect?.top >= clientHeight || rect?.bottom < 0) {
        for (const anchor of anchors) {
          anchor.classList.remove(styles.catalogActive);
        }
      } else {
        // 如果当前锚点在容器内，则为其对应的所有锚点元素添加 .anchorItemActive 类名，并移除 .anchorItemInactive 类名
        for (const anchor of anchors) {
          anchor.classList.add(styles.catalogActive);
        }
      }
    }
  }, [scroll?.top]);

  return (
    <Space className={styles.nav} direction={'vertical'}>
      {classesData.map((item, index) => {
        return (
          <div
            className={`${styles.catalog} catalogs-classify${index}`}
            key={index}
            onClick={() => scrollToComponent(`classify${index}`)}
          >
            {item.title}
          </div>
        );
      })}
    </Space>
  );
};

export default AnchorNav;
