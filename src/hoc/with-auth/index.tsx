"use client";
import React, { useState, useEffect, useCallback } from "react";
import { message } from "antd";
import { useRequest } from "ahooks";

import { useAuthClient } from "@/apis/auth-client";
import { RainbowCat } from "@/components/common/rainbow-cat";
import { AuthContext } from "./define";
import { useLang } from "../with-intl/define";

export const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const [initialized, setInitialized] = useState(false);
  const client = useAuthClient();
  const { format: t } = useLang();

  const {
    data: user,
    loading,
    refreshAsync,
  } = useRequest(
    async () => {
      // try {
      //   const resp = await client.getUserInfo();
      //   if (resp?.data) {
      //     // 登陆成功以后就删除登录之前保存的path
      //     localStorage.removeItem("no_login_data");
      //   }
      //   return resp?.data;
      // } catch (error: any) {
      //   message.error({ content: JSON.stringify(error), key: "authMsg" });
      //   return null;
      // }
      return null;
    },
    { throttleWait: 1000 }
  );

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
