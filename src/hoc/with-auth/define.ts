import { createContext, useContext } from 'react';
import { UserInfo } from '@/apis/auth-client/define';

type AuthInfo = {
  user?: UserInfo | null;
  login: () => Promise<void>;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
};

const showWarning = async () => {
  console.warn(
    'AuthContext has not been provided. You are calling a noop function.'
  );
};

export const AuthContext = createContext<AuthInfo>({
  user: null,
  login: showWarning,
  refresh: showWarning,
  logout: showWarning,
});

export const useAuth = () => {
  return useContext(AuthContext);
};
