'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConfigProvider, Layout, Space, Image, Menu, Input, Button, Dropdown, MenuProps } from 'antd';
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
  const [current, setCurrent] = useState('/');
  const pathname = usePathname();
  const { Search } = Input;


  const onSearch = (value: string) => console.log(value);
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log(e.key);
    console.log(pathname);
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        },
      }}
    >
      <Layout className={styles.headerContainer}>
        <Header className={styles.header}>
          <Space align='center' className={styles.space}>
            <Space>
              <Image
                src="/logo/logo.svg"
                alt="logo"
                preview={false}
                width={105}
                height={30}
              />
              <Menu
                mode="horizontal"
                selectedKeys={[current]}
                items={menuItems}
                onClick={handleMenuClick}
              />
            </Space>
            <Space size={24}>
              <Search
                placeholder="Search"
                onSearch={onSearch}
                enterButton
                className={styles.search}
              />
              <Space>
                <Link href='/' className={styles.logIn}>Log In</Link>
                <Button type="primary" className={styles.signUp}>Sign Up</Button>
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
            </Space>
          </Space>
        </Header>
      </Layout>
    </ConfigProvider>
  )
};

export default Nav;