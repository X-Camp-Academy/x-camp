import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import Icon from '@ant-design/icons';
import React from 'react';
import styles from './index.module.scss';

interface IProps {
  className?: string;
}

const EarthSvg = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24">
    <title>翻译icon@1x</title>
    <g id="第三版-优化" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="第三版-首页-03" transform="translate(-1341.000000, -15.000000)">
        <g id="翻译icon" transform="translate(1341.000000, 15.000000)">
          <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="24" height="24" />
          <path
            d="M12,21.99998 C17.52285,21.99998 22,17.52283 22,11.99998 C22,6.47713 17.52285,2 12,2 C6.47715,2 2,6.47713 2,11.99998 C2,17.52283 6.47715,21.99998 12,21.99998 Z"
            id="路径"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3,15.49268 C4.31596,16.02038 5.2633,16.02038 5.84195,15.49268 C6.70995,14.70113 5.96095,12.29878 7.1766,11.63623 C8.3922,10.97368 10.2443,13.91058 11.9754,12.94423 C13.70645,11.97783 11.8123,9.40103 13.0136,8.35638 C14.2149,7.31173 15.777,8.48988 16.05005,6.74313 C16.3231,4.9964 14.77605,5.75398 14.4792,4.103345 C14.28125,3.002935 14.28125,2.4243 14.4792,2.367435"
            id="路径"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.51045,21.67513 C13.5734,20.71613 13.23605,19.82473 13.49845,19.00083 C13.89205,17.76503 14.5413,17.83808 14.8244,17.07398 C15.10745,16.30983 14.3078,15.22153 16.08215,14.29118 C17.26505,13.67093 18.8915,14.38958 20.9614,16.44708"
            id="路径"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
  </svg>
);
const ToggleLanguage: React.FC<IProps> = ({ className }) => {
  const { lang, toggle } = useLang();

  return (
    <div onClick={toggle} className={`${styles.intl} ${className}`}>
      <span style={{ lineHeight: 1, display: 'inline-block', margin: '0 auto' }} className={className}>
        <Icon component={EarthSvg} />
      </span>

      <span className={styles.text}>{getTransResult(lang, '英文', 'Chinese')}</span>
    </div>
  );
};

export default ToggleLanguage;
