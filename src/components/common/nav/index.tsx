"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ConfigProvider,
  Layout,
  Space,
  Image,
  Menu,
  Input,
  Button,
  Dropdown,
  MenuProps,
} from "antd";
import { TranslationOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "animate.css";
import styles from "./index.module.scss";
import { useMobile } from "@/utils";
import { removeDropdown, useMenuItems } from "./define";
import XStarMenu from "./x-star-menu";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hoc/with-auth/define";
import DropdownUserMenu from "../dropdown-user-menu";

const { Header } = Layout;
const { Search } = Input;
const items: MenuProps["items"] = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "zh",
    label: "中文",
  },
];

const Nav: React.FC = () => {
  const [current, setCurrent] = useState("/");
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMobile();
  const menuItems = useMenuItems();
  const pathName = usePathname();

  const onSearch = (value: string) => console.log(value);
  const onChangeLanguage: MenuProps["onClick"] = (e) => {
    console.log(e.key);
  };

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (showMenu) {
      (ref?.current as HTMLDivElement)?.classList?.add(
        "animate__animated",
        "animate__slideInRight"
      );
    } else {
      (ref?.current as HTMLDivElement)?.classList?.remove(
        "animate__animated",
        "animate__slideInRight"
      );
    }
  }, [showMenu]);

  const mobileMenuItems: MenuProps["items"] = useMemo(() => {
    // 手机端则去除dropdown
    return isMobile ? removeDropdown(menuItems) : menuItems;
  }, [menuItems, isMobile]);

  const [openKeys, setOpenKeys] = useState([""]);

  const rootSubmenuKeys = ["courses", "resources", "about-us"];

  const setCurrentKey = (key: string) => {
    setCurrent(key);
  };
  const onOpenMobileMenuChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const { user, logout } = useAuth();
  console.log(user, 11);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.headerContainer}>
        <Header className={`${styles.header} container`}>
          <Space align="center" className={styles.space}>
            <Space>
              <Image
                src="/logo/logo.svg"
                alt="logo"
                preview={false}
                className={styles.image}
              />
              {!isMobile && ( // 缓存原因需要强制销毁重建组件
                <XStarMenu
                  selectedKey={current}
                  items={menuItems}
                  className={styles.menu}
                  onClick={setCurrentKey}
                />
              )}
            </Space>
            <Space>
              <Search
                placeholder="Search"
                onSearch={onSearch}
                enterButton
                className={styles.search}
              />
              {!isMobile && (
                <>
                  {user ? (
                    <DropdownUserMenu user={user} logout={logout} />
                  ) : (
                    <Space>
                      <Link href={"/login"} className={styles.logIn}>
                        Log In
                      </Link>
                      <Button type="primary" className={styles.signUp}>
                        Sign Up
                      </Button>
                    </Space>
                  )}
                  <Dropdown
                    menu={{
                      items,
                      onClick: onChangeLanguage,
                    }}
                    className={styles.dropDown}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <TranslationOutlined />
                    </a>
                  </Dropdown>
                </>
              )}

              {isMobile && (
                <Button type="primary" onClick={() => setShowMenu(true)}>
                  <UnorderedListOutlined />
                </Button>
              )}
            </Space>
          </Space>
          {isMobile && showMenu && (
            <Space ref={ref} direction="vertical" className={styles.showMenu}>
              <Button
                type="primary"
                className={styles.button}
                onClick={() => {
                  (ref?.current as HTMLDivElement)?.classList?.remove(
                    "animate__slideInRight"
                  );
                  (ref?.current as HTMLDivElement)?.classList?.add(
                    "animate__animated",
                    "animate__slideOutRight"
                  );
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <UnorderedListOutlined />
              </Button>
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
    </ConfigProvider>
  );
};

export default Nav;
