'use client';
import { ConfigProvider } from 'antd';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const WithAntdConfig = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
          fontFamily: `Poppins, Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
          Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;`,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default WithAntdConfig;
