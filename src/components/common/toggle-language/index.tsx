import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import React from 'react';
import SvgIcon from '../svg-icon';
import styles from './index.module.scss';

interface IProps {
  className?: string;
}

const ToggleLanguage: React.FC<IProps> = ({ className }) => {
  const { lang, toggle } = useLang();

  return (
    <div onClick={toggle} className={`${styles.intl} ${className}`}>
      <SvgIcon icon="Earth" className={styles.svgIcon} />
      <span className={styles.text}>{getTransResult(lang, 'English', '中文')}</span>
    </div>
  );
};

export default ToggleLanguage;
