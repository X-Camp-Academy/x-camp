'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { Layout, Col, Row, Space, Image, Menu, Input, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.module.scss';
import { TranslationOutlined } from '@ant-design/icons';
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
    <Header className={styles.header}>
      <Space className={styles.space}>
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
    </Header>
  )
};

export default Nav;