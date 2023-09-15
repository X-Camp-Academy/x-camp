import React from 'react';
import { XStarMenuItemType } from '..';
import { CaretUpOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import MenuDropdown from './menu-drop-down';
import styles from './index.module.scss';

interface Props {
  menuItem: XStarMenuItemType;
  onClick?: (selectedKey: string) => void;
  selected: boolean;
  children?: React.ReactNode[];
}

const cx = classNames.bind(styles);

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
      {children && (
        <MenuDropdown
          className={styles.dropdown}
          dropdown={menuItem?.dropdown}
          items={children}
          showBtn={menuItem.dropdown?.left?.showBtn}
        />
      )}
    </div>
  );
};

export default XStarMenuItem;
