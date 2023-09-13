'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Layout,
  Space,
  Image,
  Menu,
  Button,
  MenuProps,
} from 'antd';
import { AlignRightOutlined, CloseOutlined } from '@ant-design/icons';
import 'animate.css';
import { useMobile } from '@/utils';
import { removeDropdown, useMenuItems } from './define';
import XStarMenu from './x-star-menu';
import { useAuth } from '@/hoc/with-auth/define';
import DropdownUserMenu from '../dropdown-user-menu';
import { apiConfig } from '@/config/index';
import { getTransResult } from '@/utils/public';
import { useLang } from '@/hoc/with-intl/define';
import SelectPage from './SelectPage';
import styles from './index.module.scss';
import 'animate.css';

const { Header } = Layout;

const Nav: React.FC = () => {
  const { format: t, toggle, lang } = useLang();
  const pathname = usePathname();
  const url = new URL(window.location.href);
  const hash = url.hash; // 获取哈希部分
  const [current, setCurrent] = useState(pathname + hash);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMobile();
  const menuItems = useMenuItems();
  const { xydApi } = apiConfig;

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setCurrent(pathname + hash);
  }, [pathname, hash]);

  useEffect(() => {
    if (showMenu) {
      (ref?.current as HTMLDivElement)?.classList?.add(
        'animate__animated',
        'animate__slideInRight'
      );
    } else {
      (ref?.current as HTMLDivElement)?.classList?.remove(
        'animate__animated',
        'animate__slideInRight'
      );
    }
  }, [showMenu]);

  const mobileMenuItems: MenuProps['items'] = useMemo(() => {
    // 手机端则去除dropdown
    const loginSignUp = [
      {
        label: <a href="/login">{t('Nav.Login')}</a>,
        key: '/login',
      },
    ];
    return isMobile
      ? removeDropdown(menuItems)?.concat(loginSignUp)
      : menuItems;
  }, [menuItems, isMobile]);

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
      (ref?.current as HTMLDivElement)?.classList?.add(
        'animate__animated',
        'animate__slideOutRight'
      );
      timer = setTimeout(() => {
        setShowMenu(false);
        (ref?.current as HTMLDivElement)?.classList?.remove(
          'animate__slideInRight'
        );
        clearTimeout(timer);
      }, 1000);
    }
  };
  return (
    <Layout className={styles.headerContainer}>
      <Header className={`${styles.header} container`}>
        <Space align="center" className={styles.space}>
          <Space>
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="logo"
                preview={false}
                className={styles.image}
              />
            </Link>
            {!isMobile && ( // 缓存原因需要强制销毁重建组件
              <XStarMenu
                selectedKey={current}
                items={menuItems}
                className={styles.menu}
                onClick={setCurrentKey}
              />
            )}
          </Space>
          <Space size={'middle'}>

            {!isMobile ? (
              <>
                <SelectPage />
                {user ? (
                  <Space size={12}>
                    <DropdownUserMenu user={user} logout={logout} />
                    <Button
                      className={styles.study}
                      type="primary"
                      onClick={() => window.open(`${xydApi}/courses`)}
                    >
                      {t('ToStudy')}
                    </Button>
                  </Space>
                ) : (
                  <Button type="primary" href="/login">
                    {t('Nav.Login')}
                  </Button>
                )}
                <div onClick={toggle} className={styles.intl}>
                  <div className={styles.img} />
                  <span>{getTransResult(lang, '中文', 'English')}</span>
                </div>
              </>
            ) : (
              <span onClick={onChangeShowMenu}>
                {!showMenu ? <AlignRightOutlined /> : <CloseOutlined />}
              </span>
            )}
          </Space>
        </Space>
        {isMobile && showMenu && (
          <Space ref={ref} direction="vertical" className={styles.showMenu} size={0}>
            <div className={styles.mobileIntl}>
              <SelectPage />
              <div onClick={toggle} className={styles.intl}>
                <div className={styles.img} />
                <span>{getTransResult(lang, '中文', 'English')}</span>
              </div>
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
