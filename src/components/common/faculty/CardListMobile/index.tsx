import styles from '@/components/common/faculty/index.module.scss';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}
const CardListMobile: React.FC<IProps> = ({ children }: IProps) => {
  return <div className={styles.cardListMobileContainer}>{children}</div>;
};

export default CardListMobile;
