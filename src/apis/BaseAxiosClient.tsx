'use client';
import { LangKey, useLang } from '@/hoc/with-intl/define';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

/**
 * Client 上下文，保存不同种类的 Client
 */
const ClientContext = React.createContext<Record<string, BaseAxiosClient>>({});

/**
 * Client 构造函数参数
 */
export interface ConstructorProps {
  baseURL: string;
  config?: AxiosRequestConfig;
}

/**
 * 获取 Client 钩子
 * @param type Client 类型（一个标识 Client 的字符串）
 * @param ClientClass Client 类
 * @param baseURL Axios 基地址
 * @param config AxiosRequestConfig
 * @param server 服务器请求地址，默认为env中的API_SERVER
 * @returns Client
 */
export const useClient = <T extends BaseAxiosClient>(
  type: string,
  ClientClass: new (props: ConstructorProps) => T,
  baseURL = '',
  config: AxiosRequestConfig = {},
  server = process.env.NEXT_PUBLIC_API_SERVER
): T => {
  const clients = useContext(ClientContext);

  const router = useRouter();
  const { format: t } = useLang();

  if (!clients[type]) {
    clients[type] = new ClientClass({
      baseURL: `${server}${baseURL}`,
      ...config
    });
  }
  clients[type].t = t;
  clients[type].router = router;
  return clients[type] as T;
};

export class BaseAxiosClient {
  private axios: AxiosInstance;
  public t: (id: LangKey) => string = () => '';
  public router: AppRouterInstance | undefined;

  formHeaders = { 'content-type': 'application/x-www-form-urlencoded' };
  jsonHeaders = { 'content-type': 'application/json' };
  dataHeaders = { 'content-type': 'multipart/form-data' };

  codeMessage: Record<string, number> = {
    SUCCESS: 200,
    ACCESS_DENIED: 403,
    NOT_FOUND: 404
  };

  constructor(props: ConstructorProps) {
    const { baseURL, ...config } = props;
    this.axios = Axios.create({
      baseURL,
      headers: {},
      withCredentials: true,
      ...config
    });
    this.axios.interceptors.response.use(
      (resp) => {
        const { data } = resp;
        if (data?.code && data?.code !== this.codeMessage.SUCCESS) {
          this.handleUnknownError(data);
        }
        return resp;
      },
      (error) => {
        throw new Error((error?.response?.status || '') + ' 网络错误（Network Error）');
      }
    );
  }

  async get(methodName: string, req: any) {
    const { data } = await this.axios.get(methodName, {
      params: req
    });
    return data;
  }

  async post(methodName: string, req: any, headers: any) {
    const { data } = await this.axios.post(methodName, req, {
      headers
    });
    return data;
  }

  async put(methodName: string, req: any, headers: any) {
    const { data } = await this.axios.put(methodName, req, {
      headers
    });
    return data;
  }

  async delete(methodName: string, req: any) {
    const { data } = await this.axios.delete(methodName, { params: req });
    return data;
  }

  handleUnknownError(data: any) {
    const { code } = data;
    switch (code) {
      case this.codeMessage.ACCESS_DENIED:
        this.router?.push('/403');
        break;
      case this.codeMessage.NOT_FOUND:
        this.router?.push('/404');
        break;
    }
    throw new Error(code.toString());
  }
}
