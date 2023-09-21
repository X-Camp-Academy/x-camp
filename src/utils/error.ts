import { useLang } from '@/hoc/with-intl/define';
import { message } from 'antd';
import { notFound, useRouter } from 'next/navigation';

const codeMessage: Record<string, number> = {
  ACCESS_DENIED: 403,
  NOT_FOUND: 404,
};

type ErrorHandler = (error: any) => void;
//错误码需要携带的参数
type ErrorCodeParameter = {
  //  额外的自定义处理,这是一个使用样例
  //  823: {
  //     backToDirUrl: string;
  //   };
};
/**
 * 错误处理hook
 * @param isRedirect 是否重定向，只对403，404有效
 * @param errorCodeParameter 错误码携带的参数，当需要自定义处理错误码的时候可以使用
 * @returns (error: any) => void
 */
export const useHandleError = (
  isRedirect = true,
  errorCodeParameter: Partial<ErrorCodeParameter> = {}
): ErrorHandler => {
  const { format: t } = useLang();
  const router = useRouter();
  const key = 'error';
  const errorMap: Record<number, () => void> = {
    [codeMessage.ACCESS_DENIED]: () => {
      message.error({ content: t('403'), key });
      isRedirect && router.push('/403');
    },
    [codeMessage.NOT_FOUND]: () => {
      message.error({ content: t('404'), key });
      isRedirect && notFound();
    },
    // 额外的自定义处理,这是一个使用样例
    // 823: () => {
    //   navigate(errorCodeParameter?.[823]?.backToDirUrl);
    //   message.error({ content: t('PROBLEM_MISSING_ERROR'), key });
    // },
  };
  const handleError = (error: any) => {
    const code = error?.message;
    const errorHandle =
      errorMap[code] ??
      (() => message.error({ content: t(code.toString()), key }));
    errorHandle();
  };

  return handleError;
};
