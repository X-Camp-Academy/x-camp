import { openClassEmailRequest } from '@/apis/common/define';
import { useSendOpenClassEmail, useSubscribeNewsletter } from '@/apis/common/common';
import { useModalVisible } from '@/hoc/WithModalVisible';
import { useLang } from '@/hoc/with-intl/define';
import { addAnimate, removeAnimate, useMobile } from '@/utils';
import { MessageOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, message } from 'antd';
import React, { RefObject, useRef } from 'react';
import ConsultCardForm from './ConsultCardForm';
import OpenHouseCardForm from './OpenHouseCardForm';
import styles from './index.module.scss';
import { useGetHomeButtons } from '@/apis/strapi-client/strapi';

interface IMenuItem {
  icon: string;
  label: React.ReactElement;
  key: string;
  text: string;
  state: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileIcon: React.ReactNode;
  ref: RefObject<HTMLDivElement>;
  show: boolean | undefined;
  showMobile: boolean | undefined;
}
const FixedButtons: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const [messageApi, contextHolder] = message.useMessage();
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const { freeConsultationVisible, setFreeConsultationVisible, weeklyOpenHouseVisible, setWeeklyOpenHouseVisible } = useModalVisible();
  const { runAsync: subscribeNewsletterRun } = useSubscribeNewsletter();
  const { data } = useGetHomeButtons();

  const onFinish = async (values: openClassEmailRequest) => {
    const { email, subscribe } = values;
    await sendMailToUser(values);
    if (subscribe) {
      await subscribeNewsletterRun({ email });
    }
    messageApi.open({
      type: 'success',
      content: t('SendEmailSuccess'),
      className: styles.message,
      duration: 10,
      style: {
        marginTop: '16vh'
      }
    });
    setFreeConsultationVisible(false);
  };

  const menu: IMenuItem[] = [
    {
      icon: '/image/about-us/join-us-banner.png',
      text: isMobile ? 'Consult' : t('FreeConsultation'),
      state: freeConsultationVisible,
      setOpen: setFreeConsultationVisible as React.Dispatch<React.SetStateAction<boolean>>,
      label: <ConsultCardForm setOpen={setFreeConsultationVisible as React.Dispatch<React.SetStateAction<boolean>>} onFinish={onFinish} />,
      key: 'consult',
      mobileIcon: <MessageOutlined style={{ fontSize: 24, marginBottom: 8 }} />,
      ref: useRef<HTMLDivElement>(null),
      show: data?.showFreeConsultation,
      showMobile: data?.showFreeConsultationMobile
    },
    {
      icon: '/image/home/turtle-2.png',
      text: isMobile ? 'Open House' : t('WeeklyOpenHouse'),
      state: weeklyOpenHouseVisible,
      setOpen: setWeeklyOpenHouseVisible as React.Dispatch<React.SetStateAction<boolean>>,
      label: <OpenHouseCardForm setOpen={setWeeklyOpenHouseVisible as React.Dispatch<React.SetStateAction<boolean>>} />,
      key: 'open-house',
      mobileIcon: <UsergroupAddOutlined style={{ fontSize: 24, marginBottom: 8 }} />,
      ref: useRef<HTMLDivElement>(null),
      show: data?.showWeeklyOpenHouse,
      showMobile: data?.showWeeklyOpenHouseMobile
    }
  ];

  return (
    <>
      {contextHolder}
      <div className={styles.buttonContainer}>
        {menu?.map((item) => {
          return (
            <>
              {
                !isMobile && item?.show ?
                  <div
                    className={styles.buttonItem}
                    key={item.key}
                    ref={isMobile ? null : item?.ref}
                    onMouseEnter={() => addAnimate(item?.ref)}
                    onMouseLeave={() => removeAnimate(item?.ref)}
                  >
                    <Dropdown
                      open={item?.state}
                      onOpenChange={(value) => item?.setOpen(value)}
                      dropdownRender={() => item?.label}
                      trigger={['click']}
                      overlayStyle={{ height: '100%' }}
                    >
                      <Button
                        shape={'round'}
                        className={styles.fixedButton}
                      >
                        <span>{item?.text}</span>
                        <img src={`${item?.icon}`} alt="" />
                      </Button>
                    </Dropdown>
                  </div>
                  :
                  isMobile && item?.showMobile ?
                    <div
                      className={styles.buttonItem}
                      key={item.key}
                      ref={isMobile ? null : item?.ref}
                      onMouseEnter={() => addAnimate(item?.ref)}
                      onMouseLeave={() => removeAnimate(item?.ref)}
                    >
                      <Dropdown
                        open={item?.state}
                        onOpenChange={(value) => item?.setOpen(value)}
                        dropdownRender={() => item?.label}
                        trigger={['click']}
                        overlayStyle={{ height: '100%' }}
                      >

                        <Space
                          direction="vertical"
                          className={styles.mobileIcon}
                        >
                          {item?.mobileIcon}
                          <span>{item?.text}</span>
                        </Space>
                      </Dropdown>
                    </div>
                    : null
              }
            </>
          );
        })}
      </div>
    </>
  );
};

export default FixedButtons;
