import { useHandleError } from '@/utils/error';
import { useRequest } from 'ahooks';
import { useCommonClient } from '.';
import { openClassEmailRequest, subscribeNewsletterRequest } from './define';

export const useSendOpenClassEmail = () => {
  const handleError = useHandleError();
  const client = useCommonClient();
  return useRequest(
    async (params: openClassEmailRequest) => {
      const resp = await client.sendOpenClassEmail(params);
      return resp;
    },
    {
      manual: true,
      debounceWait: 1000,
      onError: handleError
    }
  );
};

export const useSubscribeNewsletter = () => {
  const handleError = useHandleError();
  const client = useCommonClient();
  return useRequest(
    async (params: subscribeNewsletterRequest) => {
      const resp = await client.subscribeNewsletter(params);
      return resp;
    },
    {
      manual: true,
      debounceWait: 1000,
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
  const client = useCommonClient();
  return useRequest(
    async (params: FormData) => {
      const resp = await client.submitResume(params);
      return resp;
    },
    {
      manual: true,
      debounceWait: 1000,
      onError: handleError
    }
  );
};
