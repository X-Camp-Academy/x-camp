import { useLang } from '@/hoc/with-intl/define';
import { Space } from 'antd';
import styles from './index.module.scss';

const JoinWay = () => {
  const { format: t } = useLang();
  return (
    <div className={'container'}>
      <div className={styles.description}>{t('JoinWay.Desc')}</div>
      <Space direction="vertical" size={20}>
        <div>
          <div className={styles.title}>{t('DateAndTime')}</div>
          <div className={styles.time}>{t('JoinWay.Time')}</div>
        </div>
        <div>
          <div className={styles.title}>{t('JoinWay.Btn')}</div>
          <a className={styles.link} href={'https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUK9SdXM0KzjqQT09'}>
            {'https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUK9SdXM0KzjqQT09'}
          </a>
        </div>
      </Space>
    </div>
  );
};

export default JoinWay;
