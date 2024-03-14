'use client';
import BrowserCompatibility from '@/components/common/browser-compatibility';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import { isBrowserCompatibility } from 'x-star-utils';

interface Props {
  children: ReactNode;
}

const WithAntdConfig = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11'
        }
      }}
    >
      {isBrowserCompatibility({ safari: '14.1.2' }) ? children : <BrowserCompatibility />}
    </ConfigProvider>
  );
};

export default WithAntdConfig;
