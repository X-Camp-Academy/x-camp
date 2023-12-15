'use client';
import BrowserCompatibility from '@/components/common/browser-compatibility';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import { isBrowserCompatibility } from 'x-star-utils';

interface Props {
  children: ReactNode;
}

const WithAntdConfig = ({ children }: Props) => {
  const browserVersion = {
    ie: '9999.0',
    firefox: '80.0',
    chrome: '88.0',
    crios: '88.0',
    fxios: '80.0',
    opera: '80.0',
    safari: '12.0',
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        }
      }}
    >
      {isBrowserCompatibility(browserVersion) ? children : <BrowserCompatibility />}
    </ConfigProvider>
  );
};

export default WithAntdConfig;
