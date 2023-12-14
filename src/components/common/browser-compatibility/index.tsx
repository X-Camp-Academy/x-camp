import { useLang } from '@/hoc/with-intl/define';
import styles from './index.module.scss';
import { useMobile } from '@/utils';
import { Image, Space } from 'antd';

const BrowserCompatibility = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();

  const cards = [
    // Chrome 浏览器
    {
      softDownTitle: t('CHROME_BROWSER'),
      SoftDownDesc: t('CHROME_BROWSER_DESC'),
      softWinDownLink: 'https://www.google.cn/chrome/index.html',
      softWinDownTitle: t('DOWNLOAD_LINK')
    },
    // 火狐浏览器
    {
      softDownTitle: t('FIREFOX_BROWSER'),
      SoftDownDesc: t('FIREFOX_BROWSER_DESC'),
      softWinDownLink: 'https://www.firefox.com.cn/download/',
      softWinDownTitle: t('DOWNLOAD_LINK')
    },
    // edge浏览器
    {
      softDownTitle: t('EDGE_BROWSER'),
      SoftDownDesc: t('EDGE_BROWSER_DESC'),
      softWinDownLink: 'https://www.microsoft.com/zh-cn/edge/download',
      softWinDownTitle: t('DOWNLOAD_LINK')
    }
  ];
  return (
    <div className={styles.browserCompatibilityContainer}>
      <div className={`${styles.browserCompatibility} container`}>
        <Space direction="vertical" align="center" className={styles.space}>
          <Image
            alt=""
            src={isMobile ? '/assets/x_camp_logo_white.png' : '/assets/logo.svg'}
            preview={false}
            className={styles.logo}
          />

          <div className={styles.reason}>{t('COMPATIBILITY_TIP')}</div>

          <Space direction={isMobile ? 'vertical' : 'horizontal'} className={styles.cards} size={isMobile ? 24 : 72}>
            {cards?.map((item) => (
              <div key={item?.softWinDownLink} className={styles.card}>
                <div className={styles.cardBody}>
                  <div className={styles.title}>{item.softDownTitle}</div>
                  <div className={styles.description}>{item.SoftDownDesc}</div>
                </div>
                <div className={styles.actions}>
                  {item.softWinDownLink && (
                    <a href={item.softWinDownLink} target="_blank" rel="noopener noreferrer nofollow" className={styles.link}>
                      {item.softWinDownTitle}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default BrowserCompatibility;
