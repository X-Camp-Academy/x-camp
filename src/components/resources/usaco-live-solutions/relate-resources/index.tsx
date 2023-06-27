import React from 'react';
import styles from './index.module.scss';

const RelateResources = () => {
  return (
    <div className={styles.relateResources}>
      <div className={'container'}>
        <div className={styles.title}>{'More USACO Related Resources'}</div>
        {[1, 2, 3].map((item) => {
          return (
            <div key={item}>
              <div className={styles.question}>{'USACO Public Mock Test'}</div>
              <div
                className={styles.answer}
              >{`From 2022 USACO Season, X-Camp teaching research team provide USACO authentic 
              mock test to ALL before Dec real USACO contest comes. It’s a benifit for current students chasing 
              new USACO achievements in upcoming seasons. It also benefits the competitive programming community
               due to the shortage of high-quality test problems.
              `}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelateResources;
