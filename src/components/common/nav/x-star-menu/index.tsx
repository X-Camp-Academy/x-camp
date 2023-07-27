import React, { useMemo } from 'react';
import { Space } from 'antd';
import XStarMenuItem from './menu-item';

export interface XStarMenuItemType {
  label: JSX.Element | string;
  key: string;
  children?: XStarMenuItemType[];
  dropdown?: {
    left?: {
      title?: string;
      description?: string;
      btn?: React.ReactNode;
      action?: VoidFunction;
      showBtn?: boolean;
    };
    right?: {
      title?: string;
      description?: string;
      action?: VoidFunction;
    };
  };
}

interface Props {
  className?: string;
  items: XStarMenuItemType[];
  selectedKey: string;
  onClick?: (selectedKey: string) => void;
}

const XStarMenu = ({ items, className = '', selectedKey, onClick }: Props) => {
  const renderMenuItems = (
    menuItems: XStarMenuItemType[]
  ): React.ReactNode[] => {
    return menuItems?.map((menuItem) => {
      if (menuItem?.children && menuItem?.children?.length > 0) {
        return (
          <XStarMenuItem
            key={menuItem.key}
            menuItem={menuItem}
            selected={selectedKey?.includes(menuItem?.key)}
          >
            {renderMenuItems(menuItem?.children)}
          </XStarMenuItem>
        );
      }
      return (
        <XStarMenuItem
          menuItem={menuItem}
          key={menuItem?.key}
          selected={selectedKey === menuItem?.key}
          onClick={onClick}
        />
      );
    });
  };

  return <Space className={className}>{renderMenuItems(items)}</Space>;
};

export default XStarMenu;
