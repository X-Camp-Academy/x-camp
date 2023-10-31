import { openClassEmailRequest } from '@/apis/send-email-client/define';
import { useSendOpenClassEmail } from '@/apis/send-email-client/sendEmail';
import { useModelVisible } from '@/hoc/WithModelVisible';
import { useLang } from '@/hoc/with-intl/define';
import { addAnimate, removeAnimate, useMobile } from '@/utils';
import { MessageOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { useRouter } from 'next/navigation';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import CardForm from './CardForm';
import FixedButton from './FixedButton';
import styles from './index.module.scss';

interface IMenuItem {
  icon: string;
  label: React.ReactElement;
  state?: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined;
  key: string;
  text: string;
  mobileIcon: React.ReactNode;
  ref: RefObject<HTMLDivElement>;
}
const FixedButtons: React.FC = () => {
  const router = useRouter();
  const { format: t } = useLang();
  const isMobile = useMobile();
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const [open, setOpen] = useState(false);
  const { modelVisible, setModelVisible } = useModelVisible();
  const onFinish = async (values: openClassEmailRequest) => {
    await sendMailToUser(values);
    setModelVisible(false);
  };
  const { hash } = window.location;

  const labels: string[] = [t('weeklyOpenHouseDesc1'), t('weeklyOpenHouseDesc2'), t('weeklyOpenHouseDesc3')];
  const menu: IMenuItem[] = [
    {
      icon: '/image/about-us/join-us-banner.png',
      state: [modelVisible, setModelVisible as React.Dispatch<React.SetStateAction<boolean>>],
      text: isMobile ? 'consult' : t('FreeConsultation'),
      label: <CardForm setOpen={setModelVisible as React.Dispatch<React.SetStateAction<boolean>>} onFinish={onFinish} />,
      key: '0',
      mobileIcon: <MessageOutlined style={{ fontSize: 24, marginBottom: 8 }} />,
      ref: useRef<HTMLDivElement>(null)
    },
    {
      icon: '/image/home/turtle-2.png',
      text: isMobile ? 'Open House' : t('WeeklyOpenHouse'),
      label: (
        <div className={styles.cardFrom}>
          <Card
            title={t('WeeklyOpenHouse')}
            headStyle={{
              color: '#172142',
              fontSize: 24,
              fontWeight: 'bold',
              height: 36,
              lineHeight: '36px',
              textAlign: 'center',
              borderBottom: 'none'
            }}
            bodyStyle={{
              paddingBottom: 16
            }}
            className={styles.card}
          >
            <div className={styles.cardTitle}>{t('weeklyOpenHouseOpen')}</div>
            <ul className={styles.desc}>
              {labels.map((str) => (
                <li key={str}>{str}</li>
              ))}
            </ul>
            <div className={styles.buttonList}>
              <Button type="primary" className={styles.button} onClick={() => router.push('https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUk9SdXM0KzJqQT09')}>
                {t('ZoomLink')}
              </Button>

              <Button
                type="primary"
                className={styles.button}
                onClick={() => {
                  router.push('https://calendar.google.com/calendar/u/0/selfsched?sstoken=UURhaXVoUDNzQVlLfGRlZmF1bHR8ZjkwM2I4MzViZjVlNGE1ZGFkMzc1NDQwMDFiOTMzNDQ');
                }}
              >
                1 On 1{' '}
              </Button>
            </div>
            <div className={styles.tips}>*{t('weeklyOpenHouseTips')}</div>
          </Card>
        </div>
      ),
      key: '1',
      mobileIcon: <UsergroupAddOutlined style={{ fontSize: 24, marginBottom: 8 }} />,
      ref: useRef<HTMLDivElement>(null)
    }
  ];

  useEffect(() => {
    const delay = 40000;
    const timeoutId = setTimeout(() => {
      setOpen(true);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (hash === '#appointment') {
      setOpen(true);
    }
  }, [hash]);

  return (
    <div className={styles.buttonContainer}>
      {menu.map((item) => (
        <div className={styles.buttonItem} key={item.key} ref={item?.ref} onMouseEnter={() => addAnimate(item?.ref)} onMouseLeave={() => removeAnimate(item?.ref)}>
          <FixedButton menu={item.label} icon={item.icon} state={item.state} mobileIcon={item?.mobileIcon}>
            <span>{item.text}</span>
          </FixedButton>
        </div>
      ))}
    </div>
  );
};

export default FixedButtons;
