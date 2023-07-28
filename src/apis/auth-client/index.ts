import { apiConfig } from '@/config';
import { BaseAxiosClient, useClient } from '../BaseAxiosClient';
import {
  AuthorizeRequest,
  AuthorizeResponse,
  GetUserInfoResponse,
  LoginRequest,
  LogoutResponse,
} from './define';
const { idBackendApi } = apiConfig;
export class AuthClient extends BaseAxiosClient {
  async getUserInfo() {
    const data: GetUserInfoResponse = await this.get('/getUser', {});
    return data;
  }

  async logout() {
    const data: LogoutResponse = await this.get('/logout', {});
    return data;
  }

  async login(params: LoginRequest) {
    const data = await this.get('/login', params);
    return data;
  }
}

export const useAuthClient = () => useClient('auth', AuthClient, '/v1');

export class IdAuthClient extends BaseAxiosClient {
  async authorize(params: AuthorizeRequest) {
    const data: AuthorizeResponse = await this.get('/oauth/authorize', params);
    return data?.data;
  }
}

export const useIdAuthClient = () =>
  useClient('idAuth', IdAuthClient, '', {}, idBackendApi);
