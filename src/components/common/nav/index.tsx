'use client';
import { apiConfig } from '@/config/index';
import { useAuth } from '@/hoc/with-auth/define';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { AlignRightOutlined, CloseOutlined } from '@ant-design/icons';
import 'animate.css';
import { Button, Image, Layout, Menu, MenuProps, Space } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import DropdownUserMenu from '../dropdown-user-menu';
import { removeDropdown, useMenuItems } from './define';
import styles from './index.module.scss';
import XStarMenu from './x-star-menu';
import ToggleLanguage from '../toggle-language';

const { Header } = Layout;

const Nav: React.FC = () => {
  const { format: t } = useLang();
  const pathname = usePathname();
  const url = new URL(window.location.href);
  const hash = url.hash;
  const [current, setCurrent] = useState(pathname + hash);
  const [showMenu, setShowMenu] = useState(false);
  const isiPad = useMobile('lg');
  const menuItems = useMenuItems();
  const { xydApi } = apiConfig;

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setCurrent(pathname + hash);
  }, [pathname, hash]);

  useEffect(() => {
    if (showMenu) {
      (ref?.current as HTMLDivElement)?.classList?.add('animate__animated', 'animate__slideInRight');
    } else {
      (ref?.current as HTMLDivElement)?.classList?.remove('animate__animated', 'animate__slideInRight');
    }
  }, [showMenu]);

  const mobileMenuItems: MenuProps['items'] = useMemo(() => {
    const loginSignUp = [
      {
        label: <a href="/login">{t('Nav.Login')}</a>,
        key: '/login'
      }
    ];
    return isiPad ? removeDropdown(menuItems)?.concat(loginSignUp) : menuItems;
  }, [menuItems, isiPad]);

  const [openKeys, setOpenKeys] = useState(['']);

  const rootSubmenuKeys = ['courses', 'resources', 'about-us'];

  const setCurrentKey = (key: string) => {
    setCurrent(key);
  };
  const onOpenMobileMenuChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const { user, logout } = useAuth();

  const onChangeShowMenu = () => {
    let timer: any = null;
    if (timer) {
      return;
    }
    if (!showMenu) {
      setShowMenu(true);
    } else {
      (ref?.current as HTMLDivElement)?.classList?.add('animate__animated', 'animate__slideOutRight');
      timer = setTimeout(() => {
        setShowMenu(false);
        (ref?.current as HTMLDivElement)?.classList?.remove('animate__slideInRight');
        clearTimeout(timer);
      }, 1000);
    }
  };
  return (
    <Layout className={styles.headerContainer}>
      <Header className={`${styles.header} container`}>
        <Space align="center" className={styles.space}>
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" preview={false} className={styles.logo} />
          </Link>
          {isiPad ? (
            <span onClick={onChangeShowMenu} style={{ fontSize: 24, paddingTop: 12, display: 'inline-block' }}>
              {!showMenu ? <AlignRightOutlined /> : <CloseOutlined />}
            </span>
          ) : (
            <>
              <XStarMenu selectedKey={current} items={menuItems} className={styles.menu} onClick={setCurrentKey} />
              {user ? (
                <Space size={12}>
                  <DropdownUserMenu user={user} logout={logout} />
                  <Button className={styles.study} type="primary" onClick={() => window.open(`${xydApi}/courses`)}>
                    {t('LearningCenter')}
                  </Button>
                </Space>
              ) : (
                <Button className={styles.study} type="primary" href="/login">
                  {t('Nav.Login')}
                </Button>
              )}
            </>
          )}
        </Space>

        {isiPad && showMenu && (
          <Space ref={ref} direction="vertical" className={styles.showMenu} size={0}>
            <div className={styles.mobileIntl}>
              {/* ! 下一版更新 */}
              {/* <SelectPage /> */}
              <ToggleLanguage className={styles.toggleMargin} />
            </div>
            <Menu
              mode="inline"
              openKeys={openKeys}
              selectedKeys={[current]}
              onOpenChange={onOpenMobileMenuChange}
              items={mobileMenuItems}
              onClick={({ key }) => setCurrentKey(key)}
            />
          </Space>
        )}
      </Header>
    </Layout>
  );
};

export default Nav;
