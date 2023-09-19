"use client";
import React, { ReactNode } from "react";
import { ConfigProvider } from "antd";
import { useCheckBrowserCompatibility } from "@/hooks";

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
      {/* TODO: 移动端检查完以后再恢复 */}
      {/* {compatibility ? children : <BrowserCompatibilityPage />} */}
      {children}
    </ConfigProvider>
  );
};

export default WithAntdConfig;
