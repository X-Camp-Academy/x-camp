import { useLang } from '@/hoc/with-intl/define';
import { useHandleError } from '@/utils/error';
import { useRequest } from 'ahooks';
import { message } from 'antd';
import { useCommonClient } from '.';
<<<<<<< HEAD:src/apis/common-client/sendEmail.ts
import { estimatingScoresRequest, openClassEmailRequest, subscribeNewsletterRequest } from './define';
=======
import { openClassEmailRequest, subscribeNewsletterRequest } from './define';
>>>>>>> hcc-update-env:src/apis/common/common.ts

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
      onError: handleError
    }
  );
};

export const useSubscribeNewsletter = () => {
  const handleError = useHandleError();
  const client = useCommonClient();
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
  const client = useCommonClient();
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

/**
 * 提交用户评测信息
 * @param Client
 * @returns
 */
export const useEstimatingScores = () => {
  const handleError = useHandleError();
  const client = useCommonClient();
  const { format: t } = useLang();
  return useRequest(
    async (params: estimatingScoresRequest) => {
      const resp = await client.estimatingScores(params);
      return resp;
    },
    {
      manual: true,
      onSuccess: () => {
        message.success({
          key: 'estimatingScoresSuccessfully',
          content: t('sendResume.Success')
        });
      },
      onError: handleError
    }
  );
};
