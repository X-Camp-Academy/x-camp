'use client';
import BrowserCompatibilityPage from '@/components/common/browser-compatibility';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const WithAntdConfig = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        }
      }}
    >
      {false ? children : <BrowserCompatibilityPage />}
    </ConfigProvider>
  );
};

export default WithAntdConfig;
