import React from "react";
import styles from "./index.module.scss";
import { XStarMenuItemType } from "..";
import { CaretUpOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import MenuDropdown from "./menu-drop-down";

interface Props {
  menuItem: XStarMenuItemType;
  onClick?: (selectedKey: string) => void;
  selected: boolean;
  children?: React.ReactNode[];
}

const cx = classNames.bind(styles);

const XStarMenuItem = ({ menuItem, onClick, selected, children }: Props) => {
  return (
    <>
      <span
        key={menuItem.key}
        className={cx(styles.menuItem, selected && styles.selectedItem)}
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
        />
      )}
    </>
  );
};

export default XStarMenuItem;