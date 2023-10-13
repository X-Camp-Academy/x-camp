import { openClassEmailRequest } from '@/apis/send-email-client/define';
import { useSendOpenClassEmail } from '@/apis/send-email-client/sendEmail';
import { useLang } from '@/hoc/with-intl/define';
import { addAnimate, removeAnimate, useMobile } from '@/utils';
import { MessageOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import React, { RefObject, useEffect, useRef, useState } from 'react';
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
  const { format: t } = useLang();
  const isMobile = useMobile();
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const onFinish = async (values: openClassEmailRequest) => {
    await sendMailToUser(values);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const labels: string[] = [t('weeklyOpenHouseDesc1'), t('weeklyOpenHouseDesc2'), t('weeklyOpenHouseDesc3')];
  const menu: IMenuItem[] = [
    {
      icon: '/image/about-us/join-us-banner.png',
      state: [open, setOpen],
      text: isMobile ? 'consult' : t('FreeConsultation'),
      label: (
        <div className={`${styles.cardFrom} ${styles.autoSize}`}>
          <Card
            title={t('FreeConsultation')}
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
            <div className={styles.cardTitle}>{t('SIGH_UP_USACO_TOOLKIT')}</div>
            <Form name="carouselContent" onFinish={onFinish} className={styles.form}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: t('Name.Required')
                  }
                ]}
              >
                <Input placeholder={t('Nickname')} />
              </Form.Item>

              <Form.Item
                name="grade"
                rules={[
                  {
                    required: true,
                    message: t('Grade.Required')
                  }
                ]}
              >
                <Input placeholder={t('Grade')} />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { type: 'email' },
                  {
                    required: true,
                    message: t('Email.Required')
                  }
                ]}
              >
                <Input type="email" placeholder="E-mail*" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: t('Phone/Wechat.Required')
                  }
                ]}
              >
                <Input placeholder={t('Phone/Wechat')} />
              </Form.Item>

              <Form.Item name="subscribe">
                <Checkbox>{t('FreeProgrammingPack')}</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.submit}>
                  {t('Submit')}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      ),
      key: '0',
      mobileIcon: <MessageOutlined style={{ fontSize: 36, marginBottom: 8 }} />,
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
              <Button type="primary" className={styles.button}>
                {t('ZoomLink')}
              </Button>
              <Button type="primary" className={styles.button}>
                1 On 1{' '}
              </Button>
            </div>
            <div className={styles.tips}>*{t('weeklyOpenHouseTips')}</div>
          </Card>
        </div>
      ),
      key: '1',
      mobileIcon: <UsergroupAddOutlined style={{ fontSize: 36, marginBottom: 8 }} />,
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
