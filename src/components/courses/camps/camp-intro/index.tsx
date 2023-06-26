import React, { useRef } from 'react';
import styles from './index.module.scss';
import UsacoMedal from '@/components/about-us/introduction/UsacoMedal';
const CampIntro = () => {
  return (
    <div className={styles.campIntro}>
      <div className="container">
        <div className={styles.title}>
          {'Our Summer and Winter Onsite Camps'}
        </div>
        <div className={styles.content}>
          <div className={styles.question}>
            {'What our onsite camps provide?'}
          </div>
          <div
            className={styles.answer}
          >{`Every summer and winter, X-Camp will provide onsite camps to students. 
            From beginner level to USACO different levels. Through intensive training to 
            maximize their potential,and improve students’ comprehensive programming ability in a short time.`}</div>
          <div className={styles.question}>{'USACO Achievements'}</div>
          <div
            className={styles.answer}
          >{`X-Camp has accomplished impressive results in USACO since last 5 years: more than 200 
            X-Camp students have been qualified for USACO Silver division and above, including 30 in the 
            Platinum division and 12 selected in the US Camp, out of which 7 were fresh from the 2023 
            season. 1 student selected for US EGOI Team`}</div>
          <div className={styles.medal}>
            <UsacoMedal />
          </div>

          <div className={styles.question}>{'Camp Introduction'}</div>
          <div
            className={styles.answer}
          >{`From 2021, X-Camp already held the onsite Summer and Winter Camps successfully, which achieved
           high ratings from our students and parents. Take a look at our short video of the Summer Camp to 
           give you a quick overview. `}</div>
        </div>
      </div>
    </div>
  );
};

export default CampIntro;
