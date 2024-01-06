'use client';
import BrowserCompatibility from '@/components/common/browser-compatibility';
import { ConfigProvider } from 'antd';
import { ReactNode, useEffect } from 'react';
import { isBrowserCompatibility } from 'x-star-utils';

interface Props {
  children: ReactNode;
}

const WithAntdConfig = ({ children }: Props) => {
  useEffect(() => {
    if (process.browser) {
      const eruda = require('eruda');
      eruda.init();
    }
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        }
      }}
    >
      {isBrowserCompatibility({ chrome: '86', safari: '14.1.2' }) ? children : <BrowserCompatibility />}
    </ConfigProvider>
  );
};

export default WithAntdConfig;
