import { useMobile } from '@/utils';
import { Button, Dropdown, Space } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  icon?: string;
  menu: React.ReactElement;
  children: React.ReactElement;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined;
  mobileIcon?: React.ReactNode;
}
const FixedButton: React.FC<IProps> = ({ menu, icon, children, state, mobileIcon }: IProps) => {
  const [selfOpen, setSelfOpen] = useState(false); // 第二个
  const isMobile = useMobile();
  const [open, setOpen] = state ? state : [selfOpen, setSelfOpen];
  const dropdownRender = () => menu;
  return (
    <Dropdown open={open} onOpenChange={(v) => setOpen(v)} dropdownRender={dropdownRender} trigger={['click']} overlayStyle={{ height: '100%' }}>
      {isMobile ? (
        <Space direction="vertical" className={styles.mobileIcon}>
          {mobileIcon}
          {children}
        </Space>
      ) : (
        <Button shape={'round'} className={styles.fixedButton}>
          {children}
          <img src={`${icon}`} alt="" />
        </Button>
      )}
    </Dropdown>
  );
};

export default FixedButton;
