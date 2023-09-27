import { Card, CardProps } from 'antd';
import React from 'react';
import styles from './index.module.scss';

interface MaskCardProps extends CardProps {
  ref?: React.RefObject<any>;
  maskChildren?: React.ReactNode;
  maskBackGroundColor?: string;
  maskBorderRadius?: number;
}
const MaskCard = ({ maskChildren, children, maskBackGroundColor, maskBorderRadius = 8, ...props }: MaskCardProps) => {
  return (
    <Card {...props} className={`${styles.maskCard} ${props.className}`}>
      <div className={styles.content}>{children}</div>
      <div
        className={styles.mask}
        style={{
          backgroundColor: maskBackGroundColor,
          borderRadius: maskBorderRadius
        }}
      >
        {maskChildren}
      </div>
    </Card>
  );
};

export default MaskCard;
