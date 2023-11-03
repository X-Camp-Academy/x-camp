import { openClassEmailRequest } from '@/apis/send-email-client/define';
import { useSendOpenClassEmail } from '@/apis/send-email-client/sendEmail';
import { useLang } from '@/hoc/with-intl/define';
import { addAnimate, removeAnimate, useMobile } from '@/utils';
import { MessageOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import React, { RefObject, useEffect, useRef, useState } from 'react';
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

  const [consultVisible, setConsultVisible] = useState(false);
  const [openHouseVisible, setOpenHouseVisible] = useState(false);

  const onFinish = async (values: openClassEmailRequest) => {
    await sendMailToUser(values);
    setConsultVisible(false);
  };

  const menu: IMenuItem[] = [
    {
      icon: '/image/about-us/join-us-banner.png',
      text: isMobile ? 'Consult' : t('FreeConsultation'),
      state: consultVisible,
      setOpen: setConsultVisible,
      label: <ConsultCardForm setOpen={setConsultVisible as React.Dispatch<React.SetStateAction<boolean>>} onFinish={onFinish} />,
      key: 'consult',
      mobileIcon: <MessageOutlined style={{ fontSize: 24, marginBottom: 8 }} />,
      ref: useRef<HTMLDivElement>(null)
    },
    {
      icon: '/image/home/turtle-2.png',
      text: isMobile ? 'Open House' : t('WeeklyOpenHouse'),
      state: openHouseVisible,
      setOpen: setOpenHouseVisible,
      label: <OpenHouseCardForm setOpen={setOpenHouseVisible as React.Dispatch<React.SetStateAction<boolean>>} />,
      key: 'open-house',
      mobileIcon: <UsergroupAddOutlined style={{ fontSize: 24, marginBottom: 8 }} />,
      ref: useRef<HTMLDivElement>(null)
    }
  ];

  useEffect(() => {
    const delay = 40000;
    const timeoutId = setTimeout(() => {
      setConsultVisible(true);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
