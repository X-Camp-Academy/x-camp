import { useRequest } from "ahooks";
import { message } from "antd";
import { openClassEmailRequest, useSendEmailClient } from ".";

export const useSendOpenClassEmail = () => {
  const client = useSendEmailClient();
  return useRequest(
    async (req: openClassEmailRequest) => {
      const resp = await client.sendOpenClassEmail(req);
      return resp;
    },
    {
      manual: true,
      onError: (error: any) => {
        console.log(error);
      },
    }
  );
};
