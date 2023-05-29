'use client';
import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';
const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout>
      <Content className='container'>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </Content>
    </Layout>
  )
}

export default Home;
