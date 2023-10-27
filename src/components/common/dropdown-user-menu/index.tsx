import { UserInfo } from '@/apis/auth-client/define';
import { apiConfig } from '@/config/index';
import { useLang } from '@/hoc/with-intl/define';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, Dropdown, MenuProps, Space, theme } from 'antd';
import React from 'react';
import RealNameAvatar from '../avatar';
import styles from './index.module.scss';

type UserMenuProps = {
  user: UserInfo | null;
  logout: () => Promise<void>;
};

const DropdownUserMenu = ({ user, logout }: UserMenuProps) => {
  const { idApi } = apiConfig;
  const { format: t } = useLang();
  const onClickMenu: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case 'user':
        window.open(`${idApi}/user?refer=${window.location.href}`);
        break;
      case 'logout':
        logout();
        break;
      default:
        break;
    }
  };

  const items: MenuProps['items'] = [
    {
      label: <a>{t('User.PersonalCenter')}</a>,
      key: 'user',
      icon: <UserOutlined />
    },
    {
      label: <a>{t('User.Logout')}</a>,
      key: 'logout',
      icon: <LogoutOutlined />
    }
  ];

  const { useToken } = theme;
  const { token } = useToken();

  const menuStyle = {
    boxShadow: 'none'
  };

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary
  };

  return (
    <Dropdown
      menu={{ items: items, onClick: onClickMenu }}
      className={styles.dropdown}
      overlayStyle={{
        paddingTop: 10
      }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          <Space split={<Divider style={{ margin: 0 }} type="vertical" />} style={{ padding: '4px 10px' }}>
            {user?.user_name}
            {user?.real_name}
          </Space>
          <Divider style={{ margin: 0 }} />
          {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
        </div>
      )}
      placement="bottom"
      arrow
    >
      <RealNameAvatar className="avatar" user={user} tooltip={false} />
    </Dropdown>
  );
};

export default DropdownUserMenu;
