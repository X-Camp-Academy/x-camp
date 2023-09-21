import React, { useState } from 'react';
import { Button, Card, Form, Input, Checkbox } from 'antd';
import FixedButton from './FixedButton';
import { useLang } from '@/hoc/with-intl/define';
import { useSendOpenClassEmail } from '@/apis/send-email-client/sendEmail';
import { openClassEmailRequest } from '@/apis/send-email-client/define';
import styles from './index.module.scss';


interface IMenuItem {
  icon: string,
  label: React.ReactElement,
  state?: [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined,
  key: string,
  text: string
}
const FixedButtons: React.FC = () => {
  const { format: t } = useLang();
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const onFinish = async (values: openClassEmailRequest) => {
    await sendMailToUser(values);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const labels: string[] = [
    t('weeklyOpenHouseDesc1'),
    t('weeklyOpenHouseDesc2'),
    t('weeklyOpenHouseDesc3'),
  ];
  const menu: IMenuItem[] = [
    {
      icon: '/image/about-us/join-us-banner.png',
      state: [open, setOpen],
      text: t('FreeConsultation'),
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
              borderBottom: 'none',
            }}
            bodyStyle={{
              paddingBottom: 16,
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
                    message: t('Name.Required'),
                  },
                ]}
              >
                <Input placeholder={t('Nickname')} />
              </Form.Item>

              <Form.Item
                name="grade"
                rules={[
                  {
                    required: true,
                    message: t('Grade.Required'),
                  },
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
                    message: t('Email.Required'),
                  },
                ]}
              >
                <Input type="email" placeholder="E-mail*" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: t('Phone/Wechat.Required'),
                  },
                ]}
              >
                <Input placeholder={t('Phone/Wechat')} />
              </Form.Item>

              <Form.Item name="subscribe">
                <Checkbox >{t('FreeProgrammingPack')}</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.submit}
                >
                  {t('Submit')}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      ),
      key: '0'
    },
    {
      icon: '/image/home/turtle-2.png',
      text: t('WeeklyOpenHouse'),
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
              borderBottom: 'none',
            }}
            bodyStyle={{
              paddingBottom: 16,
            }}
            className={styles.card}
          >
            <div className={styles.cardTitle}>{t('weeklyOpenHouseOpen')}</div>
            <ul className={styles.desc}>
              {labels.map(str => <li key={str}>{str}</li>)}
            </ul>
            <div className={styles.buttonList}>
              <Button type="primary" className={styles.button}>{t('ZoomLink')}</Button>
              <Button type="primary" className={styles.button}>1 On 1 </Button>
            </div>
            <div className={styles.tips}>
              *{t('weeklyOpenHouseTips')}
            </div>
          </Card>
        </div>
      ),
      key: '1'
    }
  ];

  return (
    <div className={styles.buttonContainer}>
      {menu.map((item) => (<FixedButton key={item.key} menu={item.label} icon={item.icon} state={item.state}>
        <span>
          {item.text}
        </span>
      </FixedButton>))}
    </div>
  );
};

export default FixedButtons;