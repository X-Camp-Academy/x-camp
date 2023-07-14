import { useHandleError } from "@/utils/error";
import { useCookieState, useRequest } from "ahooks";
import { useAuthClient } from ".";

export const useGetUserInfo = () => {
  const handleError = useHandleError();
  const client = useAuthClient();
  const [cookie] = useCookieState("xcamp");
  return useRequest(
    async () => {
      const resp = await client.getUserInfo();
      if (resp?.data) {
        // 登陆成功以后就删除登录之前保存的path
        localStorage.removeItem("no_login_data");
      }
      return resp?.data;
    },
    { throttleWait: 1000, onError: handleError, ready: !!cookie }
  );
};
