import { useLang } from '@/hoc/with-intl/define';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenHouseCardForm: React.FC<IProps> = ({ setOpen }) => {
  const { format: t } = useLang();
  const router = useRouter();
  const labels: string[] = [t('weeklyOpenHouseDesc1'), t('weeklyOpenHouseDesc2'), t('weeklyOpenHouseDesc3')];
  return (
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
  );
};

export default OpenHouseCardForm;
