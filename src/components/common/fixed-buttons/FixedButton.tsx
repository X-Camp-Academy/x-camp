import { Button, Dropdown } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  icon?: string;
  menu: React.ReactElement;
  children: React.ReactElement;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined;
}
const FixedButton: React.FC<IProps> = ({ menu, icon, children, state }: IProps) => {
  const [selfOpen, setSelfOpen] = useState(false);
  const [open, setOpen] = state ? state : [selfOpen, setSelfOpen];
  const dropdownRender = () => menu;
  return (
    <Dropdown open={open} onOpenChange={(v) => setOpen(v)} dropdownRender={dropdownRender} trigger={['click']}>
      <Button shape={'round'} className={styles.fixedButton}>
        {children}
        <img src={`${icon}`} alt="" />
      </Button>
    </Dropdown>
  );
};

export default FixedButton;
