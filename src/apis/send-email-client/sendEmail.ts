import { useRequest } from "ahooks";
import { message } from "antd";
import { openClassEmailRequest, useSendEmailClient } from ".";

export const useSendOpenClassEmail = () => {
  const client = useSendEmailClient();
  return useRequest(
    async (params: openClassEmailRequest) => {
      const resp = await client.sendOpenClassEmail(params);
      return resp;
    },
    {
      manual: true,
      onSuccess: () => {
        message.success({
          key: "sendEmailSuccessfully",
          content: "已将公开课信息发送至您的邮箱，请注意查收！",
        });
      },
      onError: (error: any) => {
        console.log(error);
      },
    }
  );
};
