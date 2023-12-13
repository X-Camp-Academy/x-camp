import { useLang } from '@/hoc/with-intl/define';
import { Col, Row, Space } from 'antd';
import styles from './index.module.scss';

const Introduction = () => {
  const { format: t } = useLang();

  const images = ['/image/courses/camps-1.png', '/image/courses/camps-2.png', '/image/courses/camps-3.png'];
  const data = [
    {
      question: t('Camp.Problem1'),
      answer: t('Camp.Answer1')
    },
    {
      question: t('Camp.Problem2'),
      answer: t('Camp.Answer2')
    },
    {
      question: t('Camp.Problem3'),
      answer: t('Camp.Answer3')
    }
  ];
  return (
    <div className={`${styles.introduction} container`}>
      <div className={styles.title}>{t('Camp.Title')}</div>
      <div className={styles.content}>
        {data?.map((item) => (
          <div key={item?.question}>
            <div className={styles.question}>{item?.question}</div>
            <div className={styles.answer}>{item?.answer}</div>
          </div>
        ))}
        <Row gutter={16} style={{ marginTop: 100 }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={18}>
            <video controls className={styles.videoBox}>
              <source src="https://media.strapi.turingstar.com.cn/production/2023/7/X_Camp2023_Intro_07_12_6306a9d6bd.mp4?updated_at=2023-07-20T01:53:34.680Z" type="video/mp4" />
            </video>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6}>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              {images?.map((item) => <img alt="image" src={item} key={item} className={styles.image} />)}
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Introduction;
