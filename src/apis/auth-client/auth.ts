import { useCookieState, useRequest } from 'ahooks';
import { useAuthClient, useIdAuthClient } from '.';
import { apiConfig } from '@/config';
import { message } from 'antd';
const { server, clientId } = apiConfig;
export const useGetUserInfo = () => {
  const client = useAuthClient();
  //const [cookie] = useCookieState('xcamp');
  const idClient = useIdAuthClient();
  // const router = useRouter();
  return useRequest(
    async () => {
      try {
        const resp = await client.getUserInfo();
        if (resp?.data) {
          // 登陆成功以后就删除登录之前保存的path
          localStorage.removeItem('no_login_data');
        }
        return resp?.data;
      } catch (error) {
        try {
          const code = await idClient.authorize({
            response_type: 'code',
            state: location?.pathname,
            redirect_uri: String(server) + '/login',
            client_id: String(clientId),
            xmode: 'notredirect',
          });
          await client.login({
            code,
            state: location?.pathname,
            xmode: 'notredirect',
          });
          const resp = await client.getUserInfo();
          return resp?.data;
        } catch (error: any) {
          message.error({ content: error.message, key: 'authMsg' });
          return null;
        }
      }
    },
    { throttleWait: 1000 }
  );
};
