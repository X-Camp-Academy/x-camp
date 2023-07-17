"use client";
import BrowserCompatibilityPage from "@/components/common/browser-compatibility";
import { useCheckBrowserCompatibility } from "@/hooks";
import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const WithAntdConfig = ({ children }: Props) => {
  const compatibility = useCheckBrowserCompatibility(); // 浏览器兼容性检测
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
          fontFamily: `Poppins, Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
          Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;`,
        },
      }}
    >
      {compatibility ? children : <BrowserCompatibilityPage />}
    </ConfigProvider>
  );
};

export default WithAntdConfig;
