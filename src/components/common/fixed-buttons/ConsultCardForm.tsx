import { useLang } from '@/hoc/with-intl/define';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styles from './index.module.scss';

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onFinish: (values: any) => void;
}

const ConsultCardForm: React.FC<IProps> = ({ setOpen, onFinish }) => {
  const { format: t } = useLang();
  return (
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
        extra={
          <a
            onClick={() => {
              setOpen(false);
            }}
            style={{ color: '#172142' }}
          >
            {<CloseOutlined />}
          </a>
        }
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
            <Input type="email" placeholder={t('ParentEmail')} />
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

          <Form.Item name="subscribe" valuePropName="checked">
            <Checkbox defaultChecked>{t('FreeProgrammingPack')}</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submit}>
              {t('Submit')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ConsultCardForm;
