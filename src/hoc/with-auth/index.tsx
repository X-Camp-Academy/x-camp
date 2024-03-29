'use client';
import { useAuthClient } from '@/apis/auth-client';
import { useGetUserInfo } from '@/apis/auth-client/auth';
import LoadingMask from '@/components/common/loading/LoadingMask';
import { message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useLang } from '../with-intl/define';
import { AuthContext } from './define';

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
    localStorage.removeItem('codeInfo');
    if (await refreshAsync()) {
      message.success({ content: t('Login_Successful'), key: 'authMsg' });
    } else {
      message.error({ content: t('Login_Failed'), key: 'authMsg' });
    }
  }, [refreshAsync, t]);

  const refresh = useCallback(async () => {
    await refreshAsync();
  }, [refreshAsync]);

  const logout = useCallback(async () => {
    localStorage.removeItem('codeInfo');
    try {
      await client.logout();
      if (!(await refreshAsync())) {
        message.success({ content: t('Exit_Successfully'), key: 'authMsg' });
      } else {
        message.error({ content: t('Exit_Failed'), key: 'authMsg' });
      }
    } catch (error: any) {
      message.error(error.message);
    }
  }, [client, refreshAsync, t]);

  if (!initialized) {
    return <LoadingMask loading={loading} />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        refresh,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
