import { ProductOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const Service = () => {
  return (
    <div className={`${styles.service} tabContent`} id="service">
      <div className={`${styles.content} container`}>
        <div className={'tabTitle'}>{'Service'}</div>
        <div className={styles.text}>
          <ProductOutlined />
          {'Note: This document -> content is an original work of X-Camp, and its copyright belongs to our company.'}
        </div>
      </div>
    </div>
  );
};

export default Service;
