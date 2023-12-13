import { useLang } from '@/hoc/with-intl/define';
import { useHandleError } from '@/utils/error';
import { useRequest } from 'ahooks';
import { message } from 'antd';
import { useSendEmailClient } from '.';
import { openClassEmailRequest, subscribeNewsletterRequest } from './define';

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
      onError: handleError
    }
  );
};

export const useSubscribeNewsletter = () => {
  const handleError = useHandleError();
  const client = useSendEmailClient();
  const { format: t } = useLang();
  return useRequest(
    async (params: subscribeNewsletterRequest) => {
      const resp = await client.subscribeNewsletter(params);
      return resp;
    },
    {
      manual: true,
      onSuccess: () => {
        message.success({
          key: 'sendEmailSuccessfully',
          content: t('subscribeNewsLetter.Success')
        });
      },
      onError: handleError
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
  const { format: t } = useLang();
  return useRequest(
    async (params: FormData) => {
      const resp = await client.submitResume(params);
      return resp;
    },
    {
      manual: true,
      onSuccess: () => {
        message.success({
          key: 'sendEmailSuccessfully',
          content: t('sendResume.Success')
        });
      },
      onError: handleError
    }
  );
};
