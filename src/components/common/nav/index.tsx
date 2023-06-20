"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import XStarMenu, { XStarMenuItemType } from "./x-star-menu";
import { menuItems, removeDropdown } from "./define";

const { Header } = Layout;

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
  const pathname = usePathname();
  const { Search } = Input;
  const isMobile = useMobile();

  const onSearch = (value: string) => console.log(value);
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log(e);
    console.log(e.key);
    console.log(pathname);
    setCurrent(e.key);
  };

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (showMenu) {
      (ref?.current as HTMLDivElement)?.classList?.add(
        "animate__animated",
        "animate__slideInRight"
      );
    } else {
    }
  }, [showMenu]);

  const mobileMenuItems: MenuProps["items"] = useMemo(() => {
    // 手机端则去除dropdown
    return isMobile ? removeDropdown(menuItems) : menuItems;
  }, [menuItems, isMobile]);

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
                  items={menuItems as XStarMenuItemType[]}
                  className={styles.menu}
                  onClick={(key) => setCurrent(key)}
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
                  <Space>
                    <Link href="/" className={styles.logIn}>
                      Log In
                    </Link>
                    <Button type="primary" className={styles.signUp}>
                      Sign Up
                    </Button>
                  </Space>
                  <Dropdown
                    menu={{
                      items,
                      onClick: handleMenuClick,
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
          {showMenu && (
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
                mode="vertical"
                selectedKeys={[current]}
                items={mobileMenuItems}
                className={styles.mobileMenu}
                onClick={handleMenuClick}
              />
            </Space>
          )}
        </Header>
      </Layout>
    </ConfigProvider>
  );
};

export default Nav;
