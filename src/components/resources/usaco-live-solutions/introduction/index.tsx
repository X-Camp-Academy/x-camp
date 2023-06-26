import React from 'react';
import styles from './index.module.scss';
import { Button } from 'antd';
import classNames from 'classnames/bind';

const UsacoIntro = () => {
  return (
    <div className={styles.introduction}>
      <div className={'container'}>
        <div
          className={styles.description}
        >{`In 2023 newest season, X-Camp hosts the first-ever USACO Live Solutions event
         on the entire web with our top coaches, including USACO Grandmaster Class instructors
          and ICPC World Finalists. They meticulously dissect the competition problems from the 
          USACO Bronze, Silver, and Gold levels, providing in-depth explanations and unraveling 
          the intricacies.`}</div>
      </div>
    </div>
  );
};

export default UsacoIntro;
