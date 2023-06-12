import styles from './LoadingMask.module.scss';

import React from 'react';

import LoadingSquare from './LoadingSquare';
import { useDelayedMount } from '@/hooks';

interface LoadingMaskProps {
  loading: boolean;
}

/**
 * 加载蒙层
 */
const LoadingMask: React.FC<LoadingMaskProps> = ({ loading }) => {
  const [mount, visible] = useDelayedMount(loading, 300);

  return (
    <>
      {mount && (
        <div className={`${styles.mask} ${visible ? '' : styles.hide}`}>
          <LoadingSquare />
        </div>
      )}
    </>
  );
};

export default LoadingMask;
