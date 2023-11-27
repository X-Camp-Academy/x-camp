'use client';
import { SubmitQuestion } from '@/apis/strapi-client/define';
import { useGetFaq, useSubmitQuestion } from '@/apis/strapi-client/strapi';
import QACard from '@/components/common/q&a';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { Button, Card, Col, Form, Input, Row, Typography, message } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const { Title } = Typography;
const { TextArea } = Input;

const QAPart: React.FC = () => {
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  const [form] = Form.useForm();
  const pathname = usePathname();
  const { data: faq } = useGetFaq({
    ready: true,
    pageName: [pathname]
  });
  const { runAsync: submitQuestion } = useSubmitQuestion();
  const onFinish = async (values: SubmitQuestion) => {
    await submitQuestion({
      data: values
    });
    form.resetFields();
    message.config({
      top: 90
    });
    message.success({ key: 'success', content: t('feedBackSuccess') });
  };

  return (
    <div className={`${styles.qaContent} container`}>
      <Title className={styles.title}>{t('Questions')}</Title>
      <Row gutter={isMobile ? [32, 0] : [32, 32]}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          {faq
            ?.slice(0, 4)
            ?.map((item, index) => (
              <QACard
                key={item?.id}
                question={getTransResult(lang, item?.attributes?.questionZh, item?.attributes?.questionEn) || ''}
                answer={getTransResult(lang, item?.attributes?.answerZh, item?.attributes?.answerEn) || ''}
                index={index}
              />
            ))}
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          <Card className={styles.card}>
            <Title className={styles.formTitle}>{t('SubmitAQuestion')}</Title>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Row gutter={[16, 8]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item label={t('FirstName')} name={'firstName'} rules={[{ required: true }]}>
                    <Input placeholder={t('FirstName')} />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item label={t('LastName')} name={'lastName'} rules={[{ required: true }]}>
                    <Input placeholder={t('LastName')} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 8]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    label={t('Email')}
                    name={'email'}
                    rules={[
                      {
                        type: 'email'
                      },
                      {
                        required: true
                      }
                    ]}
                    required
                  >
                    <Input placeholder="partner@x-camp.org" />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item label={t('Phone')} name={'phone'}>
                    <Input placeholder="(XXX) XXX-XXXX" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label={t('Message')} name={'message'} rules={[{ required: true }]}>
                <TextArea placeholder={t('YourMessageHere')} className={styles.formTextArea} autoSize={{ minRows: 6, maxRows: 6 }} />
              </Form.Item>

              <Form.Item style={isMobile ? { marginBottom: 0 } : {}}>
                <Button className={styles.formButton} htmlType="submit">
                  {t('Submit')}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default QAPart;
