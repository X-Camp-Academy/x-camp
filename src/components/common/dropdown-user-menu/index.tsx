import { UserInfo } from "@/apis/auth-client/define";
import { apiConfig } from "@/config/indx";
import { LogoutOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React from "react";
import RealNameAvatar from "../avatar";

type UserMenuProps = {
  user: UserInfo | null;
  logout: () => Promise<void>;
};

const DropdownUserMenu = ({ user, logout }: UserMenuProps) => {
  const { idApi } = apiConfig;
  const onClickMenu: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "user":
        window.open(`${idApi}/user?refer=${window.location.href}`);
        break;
      case "logout":
        logout();
        break;
      default:
        break;
    }
  };

  const items: MenuProps["items"] = [
    {
      label: <a>{"退出登录"}</a>,
      key: "logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Dropdown
      menu={{ items: items, onClick: onClickMenu }}
      placement="bottom"
      arrow
    >
      <a style={{ color: "#000000" }}>
        <Space size={2}>
          <RealNameAvatar
            className="avatar"
            user={user}
            style={{ marginRight: 10 }}
          />
          <span>{user?.userName}</span>
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownUserMenu;
