'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConfigProvider, Layout, Space, Image, Menu, Input, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import styles from './index.module.scss';


const { Header } = Layout;
const menuItems: MenuProps['items'] = [
  {
    label: <Link href='/'>Home</Link>,
    key: '/',
  },
  {
    label: <Link href='/courses'>Courses</Link>,
    key: 'courses',
  },
  {
    label: <Link href='/contests'>Contests</Link>,
    key: 'contests',
  },
  {
    label: <Link href='/about-us'>About Us</Link>,
    key: 'about-us',
  },
  {
    label: <Link href='/contact-us'>Contact Us</Link>,
    key: 'contact-us',
  },
];
const items: MenuProps['items'] = [
  {
    key: 'en',
    label: 'English',
  },
  {
    key: 'zh',
    label: '中文',
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();
  const { Search } = Input;
  console.log(pathname);

  const onSearch = (value: string) => console.log(value);
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fabb07',
        },
      }}
    >
      <Layout className={styles.headerContainer}>
        <Header className={styles.header}>
          <Space className={styles.space}>
            <Space>
              <Image
                src="/logo/logo.svg"
                alt="logo"
                preview={false}
                width={120}
                height={40}
              />
              <Menu
                mode="horizontal"
                selectedKeys={[pathname]}
                items={menuItems}
              />
            </Space>
            <Space>
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                className={styles.search}
              />
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
            </Space>
          </Space>
        </Header>
      </Layout>
    </ConfigProvider>
  )
};

export default Nav;