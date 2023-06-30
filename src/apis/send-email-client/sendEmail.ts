import { useRequest } from "ahooks";
import { message } from "antd";
import { openClassEmailRequest, useSenEmailCLient } from ".";

export const useSendOpenClassEmail = () => {
  const client = useSenEmailCLient();
  return useRequest(
    async (req: openClassEmailRequest) => {
      return await client.sendOpenClassEmail(req);
    },
    {
      manual: true,
      onError: (error: any) => {
        message.error(error);
      },
    }
  );
};
