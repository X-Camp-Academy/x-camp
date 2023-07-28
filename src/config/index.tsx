export type ApiConfig = {
  server: string;
  debug?: boolean; // enable dev tools for all clients
  idApi: string;
  baseApi: string;
  clientId: string;
  strapiServer: string;
  xydApi: string;
  idBackendApi: string;
};

export const apiConfig: ApiConfig = {
  server:
    process.env.NEXT_PUBLIC_API_SERVER ||
    'https://xcamp-service.test.turingstar.com.cn',
  debug: Boolean(parseInt(process.env.NEXT_PUBLIC_API_DEBUG || '0')),
  idApi: process.env.NEXT_PUBLIC_ID_API || 'https://id.turingstar.com.cn',
  idBackendApi:
    process.env.NEXT_PUBLIC_ID_BACKEND_API ||
    'https://id-api.turingstar.com.cn',
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || 'xcamp-service-dev',
  baseApi: process.env.NEXT_PUBLIC_BASE_API || 'https://www-new.x-camp.academy',
  strapiServer:
    process.env.NEXT_PUBLIC_STRAPI_SERVER || 'https://strapi.turingstar.com.cn',
  xydApi: process.env.NEXT_PUBLIC_XYD || 'https://www.xinyoudui.com',
};
