import { Card, CardProps } from 'antd';
import React from 'react';
import styles from './index.module.scss';
interface MaskCardProps extends CardProps {
  ref?: React.RefObject<any>;
  maskChildren?: React.ReactNode;
  maskBackGroundColor?: string;
}
const MaskCard = ({
  maskChildren,
  children,
  maskBackGroundColor,
  ...props
}: MaskCardProps) => {
  return (
    <Card {...props} className={`${styles.maskCard} ${props.className}`}>
      <div className={styles.content}>{children}</div>
      <div
        className={styles.mask}
        style={{ backgroundColor: maskBackGroundColor }}
      >
        {maskChildren}
      </div>
    </Card>
  );
};

export default MaskCard;
