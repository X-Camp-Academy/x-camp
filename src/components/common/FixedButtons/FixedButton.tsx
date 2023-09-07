import React, {useState} from 'react';
import {Dropdown, Button} from "antd";
import type {MenuProps} from 'antd';
import styles from "@/components/common/FixedButtons/index.module.scss";


interface IProps {
    icon?: string
    menu: React.ReactElement,
    children: React.ReactElement,
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
}
const FixedButton: React.FC<IProps> = ({ menu, icon, children, state }: IProps) => {
    const [selfOpen, setSelfOpen] = useState(false);
    const [open, setOpen] = state ? state : [selfOpen, setSelfOpen];
    const dropdownRender = () => menu;
    const onOpenChange = (v: boolean) => {
        setOpen(v);
    };
    return (<>
      <Dropdown open={open} onOpenChange={onOpenChange} placement={'bottomRight'} dropdownRender={dropdownRender} trigger={['click']}>
        <Button shape={'round'} className={styles.fixedButton}>
          {children}
          <img src={`${icon}`} alt="" />
        </Button>
      </Dropdown>
            </>);
};

export default FixedButton;