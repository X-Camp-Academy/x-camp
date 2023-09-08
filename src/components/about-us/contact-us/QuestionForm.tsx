'use client';
import React from 'react';
import { Row, Col, Card, Typography, Form, Input, Button, message } from 'antd';
import { usePathname } from 'next/navigation';
import { getTransResult } from '@/utils/public';
import { useLang } from '@/hoc/with-intl/define';
import QACard from '@/components/common/q&a';
import { useGetFaq, useSubmitQuestionForm } from '@/apis/strapi-client/strapi';
import { UserInfo } from '@/apis/strapi-client/define';
import styles from './QuestionForm.module.scss';

const { Title } = Typography;
const { TextArea } = Input;

const QAPart: React.FC = () => {
  const { format: t, lang } = useLang();
  const [form] = Form.useForm();
  const pathname = usePathname();
  const { data: faq } = useGetFaq({
    ready: true,
    pageName: [pathname as string],
  });
  const { runAsync: submitQuestionForm } = useSubmitQuestionForm();
  const onFinish = async (values: UserInfo) => {
    await submitQuestionForm({
      data: values,
    });
    form.resetFields();
    message.success({ key: 'success', content: t('SUCCESSFULLY_SUBMITTED') });
  };

  return (
    <div className={`${styles.qaContent} container`}>
      <Title className={styles.title}>{t('Questions')}</Title>
      <Row gutter={[32, 32]} className={styles.row}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          {faq?.slice(0, 4)?.map((item, index) => (
            <QACard
              key={'referral' + index}
              question={
                getTransResult(
                  lang,
                  item?.attributes?.questionZh,
                  item?.attributes?.questionEn
                ) || ''
              }
              answer={
                getTransResult(
                  lang,
                  item?.attributes?.answerZh,
                  item?.attributes?.answerEn
                ) || ''
              }
              index={index}
            />
          ))}
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <Card className={styles.card}>
            <Title className={styles.formTitle}>{t('SubmitAQuestion')}</Title>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Row gutter={[16, 8]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item
                    label={t('FirstName')}
                    name={'firstName'}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t('FirstName')} />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item
                    label={t('LastName')}
                    name={'lastName'}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t('LastName')} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 8]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item
                    label={t('Email')}
                    name={'email'}
                    rules={[
                      {
                        type: 'email',
                      },
                      {
                        required: true,
                      },
                    ]}
                    required
                  >
                    <Input placeholder="partner@x-camp.org" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 12 }}
                >
                  <Form.Item label={t('Phone')} name={'phone'}>
                    <Input placeholder="(XXX) XXX-XXXX" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label={t('Message')}
                name={'message'}
                rules={[{ required: true }]}
              >
                <TextArea
                  placeholder={t('YourMessageHere')}
                  className={styles.formTextArea}
                  autoSize={{ minRows: 6, maxRows: 6 }}
                />
              </Form.Item>

              <Form.Item>
                <Button className={styles.formButton} htmlType="submit">
                  {t('Submit')}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div >
  );
};

export default QAPart;
