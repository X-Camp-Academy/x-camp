'use client';
import { subscribeNewsletterRequest } from '@/apis/send-email-client/define';
import { useSubscribeNewsletter } from '@/apis/send-email-client/sendEmail';
import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Button, Form, Input, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const SubscribeNewsletter: React.FC = () => {
  const { format: t } = useLang();
  const { runAsync: subscribeNewsletterRun } = useSubscribeNewsletter();
  const isMobile = useMobile();

  const onFinish = async (values: subscribeNewsletterRequest) => {
    await subscribeNewsletterRun(values);
  };
  return (
    <div className={`${styles.subscribeNewsletter} container`}>
      <ColorfulCard border={'bottom'} index={1} animate={false}>
        <Space direction="vertical" className={styles.space}>
          <Title className={styles.title}>{t('SubscribeNewsletter')}</Title>

          <Paragraph className={styles.paragraph}>
            {t('SubscribeNewsletter.Desc1')}
            <br />
            {t('SubscribeNewsletter.Desc2')}
          </Paragraph>

          <Form name="subscribeNewsletter" onFinish={onFinish} layout={isMobile ? 'vertical' : 'inline'} className={styles.form}>
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
              <Input type="email" placeholder="E-mail*" className={styles.formSelect} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.submit}>
                {t('SubscribeNewsletter')}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </ColorfulCard>
    </div>
  );
};

export default SubscribeNewsletter;
