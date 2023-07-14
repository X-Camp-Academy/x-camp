"use client";
import React, { useState, useEffect, useCallback } from "react";
import { message } from "antd";
import { useAuthClient } from "@/apis/auth-client";
import { RainbowCat } from "@/components/common/rainbow-cat";
import { AuthContext } from "./define";
import { useLang } from "../with-intl/define";
import { useGetUserInfo } from "@/apis/auth-client/auth";

export const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const [initialized, setInitialized] = useState(false);
  const client = useAuthClient();
  const { format: t } = useLang();

  const { data: user, loading, refreshAsync } = useGetUserInfo();

  useEffect(() => {
    if (!loading) {
      setInitialized(true);
    }
  }, [loading]);

  const login = useCallback(async () => {
    // 清除local storage
    localStorage.removeItem("codeInfo");
    if (await refreshAsync()) {
      message.success({ content: "登陆成功", key: "authMsg" });
    } else {
      message.error({ content: "登陆失败", key: "authMsg" });
    }
  }, [refreshAsync, t]);

  const refresh = useCallback(async () => {
    await refreshAsync();
  }, [refreshAsync]);

  const logout = useCallback(async () => {
    // 清除local storage
    localStorage.removeItem("codeInfo");
    try {
      await client.logout();
      if (!(await refreshAsync())) {
        message.success({ content: "退出成功", key: "authMsg" });
      } else {
        message.error({ content: "退出失败", key: "authMsg" });
      }
    } catch (error: any) {
      message.error(error.message);
    }
  }, [client, refreshAsync, t]);

  if (!initialized) {
    return <RainbowCat text={"加载中"} />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        refresh,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
