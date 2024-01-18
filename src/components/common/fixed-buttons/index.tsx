import { openClassEmailRequest } from '@/apis/send-email-client/define';
import { useSendOpenClassEmail, useSubscribeNewsletter } from '@/apis/send-email-client/sendEmail';
import { useModalVisible } from '@/hoc/WithModalVisible';
import { useLang } from '@/hoc/with-intl/define';
import { addAnimate, removeAnimate, useMobile } from '@/utils';
import { MessageOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, message } from 'antd';
import React, { RefObject, useRef } from 'react';
import ConsultCardForm from './ConsultCardForm';
import OpenHouseCardForm from './OpenHouseCardForm';
import styles from './index.module.scss';

interface IMenuItem {
  icon: string;
  label: React.ReactElement;
  key: string;
  text: string;
  state: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileIcon: React.ReactNode;
  ref: RefObject<HTMLDivElement>;
}
const FixedButtons: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const { freeConsultationVisible, setFreeConsultationVisible, weeklyOpenHouseVisible, setWeeklyOpenHouseVisible } = useModalVisible();

  const { runAsync: subscribeNewsletterRun } = useSubscribeNewsletter();

  const onFinish = async (values: openClassEmailRequest) => {
    const { email, subscribe } = values;
    await sendMailToUser(values);
    if (subscribe) {
      await subscribeNewsletterRun({ email });
    }
    message.config({
      top: 160
    });
    message.success({
      key: 'sendEmailSuccessfully',
      content: t('SendEmailSuccess'),
      className: styles.message,
      duration: 10
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
      ref: useRef<HTMLDivElement>(null)
    },
    {
      icon: '/image/home/turtle-2.png',
      text: isMobile ? 'Open House' : t('WeeklyOpenHouse'),
      state: weeklyOpenHouseVisible,
      setOpen: setWeeklyOpenHouseVisible as React.Dispatch<React.SetStateAction<boolean>>,
      label: <OpenHouseCardForm setOpen={setWeeklyOpenHouseVisible as React.Dispatch<React.SetStateAction<boolean>>} />,
      key: 'open-house',
      mobileIcon: <UsergroupAddOutlined style={{ fontSize: 24, marginBottom: 8 }} />,
      ref: useRef<HTMLDivElement>(null)
    }
  ];

  return (
    <div className={styles.buttonContainer}>
      {menu?.map((item) => (
        <div className={styles.buttonItem} key={item.key} ref={isMobile ? null : item?.ref} onMouseEnter={() => addAnimate(item?.ref)} onMouseLeave={() => removeAnimate(item?.ref)}>
          <Dropdown open={item?.state} onOpenChange={(value) => item?.setOpen(value)} dropdownRender={() => item?.label} trigger={['click']} overlayStyle={{ height: '100%' }}>
            {isMobile ? (
              <Space direction="vertical" className={styles.mobileIcon}>
                {item?.mobileIcon}
                <span>{item?.text}</span>
              </Space>
            ) : (
              <Button shape={'round'} className={styles.fixedButton}>
                <span>{item?.text}</span>
                <img src={`${item?.icon}`} alt="" />
              </Button>
            )}
          </Dropdown>
        </div>
      ))}
    </div>
  );
};

export default FixedButtons;
