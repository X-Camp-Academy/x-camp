import styles from './index.module.scss';

const BannerMobile = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>{'Customized Learning Tracks'}</div>
      <div className={styles.content}>{'Track progress with weekly assignments and a 24/7 online forum for learning.'}</div>
    </div>
  );
};

export default BannerMobile;
