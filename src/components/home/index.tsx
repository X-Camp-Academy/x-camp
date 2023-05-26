'use client';
import React from 'react';
import Link from 'next/link';
import './index.module.scss';

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link href='/enroll'>Enroll</Link>
    </div>
  )
}

export default Home;
