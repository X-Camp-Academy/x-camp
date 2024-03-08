import styles from './index.module.scss';

const steps = [
  'You can search around our website to see which class suits your kids.',
  'You can arrange a free 1-1 consultation schedule with our staff to check which class your kids suit the most or join our Friday Zoom Open House to ask any question about our classes.',
  <>
    {"Let your kid do an assessment test to further check your kids' current stage. "}
    <span style={{ color: '#FFAD11' }}>{'(optional)'}</span>
  </>,
  'Talk with our staff through email/Text/Phone to make sure of the details of the class and fee policy.',
  'Make Zelle transfer.',
  'Fill in our Google form.'
];

const Service = () => {
  return (
    <div className={`${styles.service} tabContent`} id="service">
      <div className={`${styles.content} container`}>
        <div className={'tabTitle'}>{'Service'}</div>
        <div className={styles.title}>{'What would be the sign up process be like'}</div>
        <div className={styles.steps}>
          {steps?.map((v, index) => (
            <div className={styles.item} key={String(index + 1)}>
              <div className={styles.number}>
                <div>{`${index + 1}`}</div>
                <div>{'Step'}</div>
              </div>
              <div className={styles.text}>{v}</div>
            </div>
          ))}
        </div>
        <div className={styles.payment}>
          <span className={styles.title}>{'Payment Method: '}</span>
          <span className={styles.description}>{'We accept payment through zelle'}</span>
        </div>
        <div className={styles.title}>{'Return Refund Policy'}</div>
        <div className={styles.tip}>
          <img src="/image/course-detail/book.png" alt="" />
          <span className={styles.title}>{'Before join the class: '}</span>
          <span className={styles.description}>
            {'Any time prior to 1 week before class would offer free refund. 1 week before class starts, we will charge a $100 administration fee. And the rest amount of fee could be refunded. '}
          </span>
        </div>
        <div className={styles.tip} style={{ marginTop: 12 }}>
          <img src="/image/course-detail/book.png" alt="" />
          <span className={styles.title}>{'After join the class: '}</span>
          <span className={styles.description}>
            {'Any time prior to 1 week before class would offer free refund. 1 week before class starts, we will charge a $100 administration fee. And the rest amount of fee could be refunded. '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
