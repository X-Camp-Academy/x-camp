import { GetContests } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { Divider } from 'antd';
import { useEffect } from 'react';
import styles from './index.module.scss';

interface Props {
  data: StrapiResponseDataItem<GetContests>[] | undefined;
}

const Introduction = ({ data }: Props) => {
  const { lang } = useLang();
  const { hash } = window.location;

  const scrollIntoView = (id: string) => {
    const handleScroll = () => {
      const dom = document.getElementById(id);
      if (dom) {
        dom.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return handleScroll;
  };

  const handleScroll = scrollIntoView(hash.slice(1));
  useEffect(() => {
    handleScroll();
  }, [handleScroll]);
  return (
    <div className={`${styles.content} container`}>
      {data?.map((v) => (
        <div key={v?.id} id={`contest-${v?.id}`}>
          <div>
            <div className={styles.contest}>
              <div className={styles.title}>{getTransResult(lang, v?.attributes?.titleZh, v?.attributes?.titleEn)}</div>
              <div className={styles.intro}>
                <div className={styles.left}>
                  <div className={styles.description}>{getTransResult(lang, v?.attributes?.descriptionZh, v?.attributes?.descriptionEn)}</div>
                  <a href={v?.attributes?.contestLink} className={styles.link}>
                    {v?.attributes?.contestLink}
                  </a>
                </div>
                <div
                  className={styles.right}
                  style={v?.attributes?.contestLink ? {} : { cursor: 'auto' }}
                  onClick={() => v?.attributes?.contestLink ? window.open(v?.attributes?.contestLink) : null}
                >
                  <img src={v?.attributes?.contestLogo?.data?.attributes?.url} alt="" />
                </div>
              </div>
            </div>
            <Divider className={styles.divider} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Introduction;
