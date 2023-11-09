import { CaretUpOutlined } from '@ant-design/icons';
import React from 'react';
import { XStarMenuItemType } from '..';
import styles from './index.module.scss';
import MenuDropdown from './menu-drop-down';

interface Props {
  menuItem: XStarMenuItemType;
  onClick?: (selectedKey: string) => void;
  selected: boolean;
  children?: React.ReactNode[];
}

const XStarMenuItem = ({ menuItem, onClick, selected, children }: Props) => {
  return (
    <div className={styles.menuContent}>
      <span
        key={menuItem.key}
        className={`${styles.menuItem} ${selected && 'selectedItem'}`}
        onClick={() => {
          onClick?.(menuItem?.key);
        }}
      >
        {menuItem?.label}
        {menuItem?.children && <CaretUpOutlined className={styles.icon} />}
      </span>
      {children && <MenuDropdown className={styles.dropdown} dropdown={menuItem?.dropdown} items={children} showBtn={menuItem.dropdown?.left?.showBtn} />}
    </div>
  );
};

export default XStarMenuItem;
