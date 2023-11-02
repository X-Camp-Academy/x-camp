import { useLang } from '@/hoc/with-intl/define';
import styles from './index.module.scss';

const BrowserCompatibilityPage = () => {
  const { format: t } = useLang();
  const cardLink = [
    // Chrome 浏览器
    {
      softDownTitle: t('CHROME_BROWSER'),
      SoftDownDesc: t('CHROME_BROWSER_DESC'),
      softWinDownLink: 'https://www.google.cn/chrome/index.html',
      softWinDownTitle: t('DOWNLOAD_LINK')
    },
    // 火狐浏览器
    {
      softMacDownLink: '',
      softMacDownTitle: '',
      softDownTitle: t('FIREFOX_BROWSER'),
      SoftDownDesc: t('FIREFOX_BROWSER_DESC'),
      softWinDownLink: 'https://www.firefox.com.cn/download/',
      softWinDownTitle: t('DOWNLOAD_LINK')
    },
    // edge浏览器
    {
      softMacDownLink: '',
      softMacDownTitle: '',
      softDownTitle: t('EDGE_BROWSER'),
      SoftDownDesc: t('EDGE_BROWSER_DESC'),
      softWinDownLink: 'https://www.microsoft.com/zh-cn/edge/download',
      softWinDownTitle: t('DOWNLOAD_LINK')
    }
  ];
  return (
    <div className={styles.page}>
      <div className={styles.hello} />
      <div className={styles.ip} />
      <div className={styles.planets} />
      <div className={styles.content}>
        <div className={styles.logo}>
          <img alt="" style={{ height: 40, marginRight: 30 }} src="/assets/x_camp_logo_white.png" />
          <img alt="" style={{ height: 40 }} src="/assets/xyd_logo_white.png" />
        </div>
        <div className={styles.reason}>{t('COMPATIBILITY_TIP')}</div>
        <div className={styles.cards}>
          {cardLink.map((item, i) => (
            <div key={i} className={styles.card}>
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
                {item.softMacDownLink && (
                  <a href={item.softMacDownLink} target="_blank" rel="noopener noreferrer nofollow" className={styles.link}>
                    {item.softMacDownTitle}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowserCompatibilityPage;
