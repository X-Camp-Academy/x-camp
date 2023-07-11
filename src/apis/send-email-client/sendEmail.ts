import { useRequest } from "ahooks";
import { message } from "antd";
import {
  openClassEmailRequest,
  subscribeNewsletterRequest,
  useSendEmailClient,
} from ".";
import { useHandleError } from "@/utils/error";

export const useSendOpenClassEmail = () => {
  const handleError = useHandleError();
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
      onError: handleError,
    }
  );
};

export const useSubscribeNewsletter = () => {
  const handleError = useHandleError();
  const client = useSendEmailClient();
  return useRequest(
    async (params: subscribeNewsletterRequest) => {
      const resp = await client.subscribeNewsletter(params);
      return resp;
    },
    {
      manual: true,
      onSuccess: () => {
        message.success({
          key: "sendEmailSuccessfully",
          content: "订阅成功，请查收您的邮箱",
        });
      },
      onError: handleError,
    }
  );
};

/**
 * 上传用户简历
 * @param Client
 * @returns
 */
export const useSubmitResume = () => {
  const handleError = useHandleError();
  const client = useSendEmailClient();
  return useRequest(
    async (params: FormData) => {
      const resp = await client.submitResume(params);
      return resp;
    },
    {
      manual: true,
      onSuccess: () => {
        message.success({
          key: "sendEmailSuccessfully",
          content: "已将简历发送至X-Camp邮箱",
        });
      },
      onError: handleError,
    }
  );
};
