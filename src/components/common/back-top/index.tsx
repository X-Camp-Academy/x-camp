"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

const BackTop: React.FC = () => {
  const scrollToTop = () => {
    // 获取根元素
    const rootElement = document.documentElement || document.body;

    // 滚动根元素到顶部
    rootElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.backTop} onClick={scrollToTop}>
      <VerticalAlignTopOutlined className={styles.icon} />
    </div>
  );
};

export default BackTop;
