import styles from './LoadingSquare.module.scss';

import React from 'react';

const LoadingSquare: React.FC = () => (
  <div className={styles.loader}>
    <div className={styles.loadingSquare} />
    <div className={styles.loadingSquare} />
    <div className={styles.loadingSquare} />
    <div className={styles.loadingSquare} />
  </div>
);

export default LoadingSquare;
