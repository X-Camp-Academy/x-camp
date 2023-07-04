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
import { useAuth } from "@/hoc/with-auth/define";
import DropdownUserMenu from "../dropdown-user-menu";
import { apiConfig } from "@/config/indx";

import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

const { Header } = Layout;
const { Search } = Input;

const Nav = () => {
  const { format: t, toggle, lang } = useLang();
  const [current, setCurrent] = useState("/");
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMobile();
  const menuItems = useMenuItems();
  const { xydApi } = apiConfig;

  const onSearch = (value: string) => console.log(value);

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
            <Space size={"middle"}>
              <Search
                placeholder="Search"
                onSearch={onSearch}
                enterButton
                className={styles.search}
              />
              {!isMobile && (
                <>
                  {user ? (
                    <Space size={12}>
                      <DropdownUserMenu user={user} logout={logout} />
                      <Button
                        type="primary"
                        onClick={() => window.open(`${xydApi}/courses`)}
                      >
                        {t("ToStudy")}
                      </Button>
                    </Space>
                  ) : (
                    <Button type="primary" href="/login">
                      Login / Register
                    </Button>
                  )}

                  <Button
                    type="link"
                    icon={<TranslationOutlined style={{ fontSize: 20 }} />}
                    onClick={toggle}
                  >
                    {getTransResult(lang, "中文", "English")}
                  </Button>
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
