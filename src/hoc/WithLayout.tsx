'use client';
import LoadingMask from '@/components/common/loading/LoadingMask';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const WithLayout = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  /**
   * 在window对象被挂载的时候才导入，否则每100ms重试一次
   * @param retry 重试次数
   */
  const importPackage = (retry: number) => {
    if (window) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // antd和next13出现闪烁问题
    } else {
      setTimeout(() => importPackage(retry - 1), 100);
    }
  };

  useEffect(() => {
    importPackage(10);
  }, []);

  return (
    <>
      <LoadingMask loading={isLoading} />
      {children}
    </>
  );
};

export default WithLayout;
