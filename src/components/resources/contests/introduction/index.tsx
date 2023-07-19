import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Divider } from "antd";
import { GetNewEvent } from "@/apis/strapi-client/define";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { log } from "console";

interface Props {
  data: StrapiResponseDataItem<GetNewEvent>[] | undefined;
}

const Introduction = ({ data }: Props) => {
  const { lang } = useLang();
  const { hash } = window.location;


/*   const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    console.log(id)
    console.log(dom);
    
    dom?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  // 监听hash
  useEffect(() => {

    scrollIntoView(hash.slice(1));

  }, [hash]); */


  // 这样处理是为了防止组件没挂载时调用
  const scrollIntoView = (id: string) => {
    const handleScroll = () => {
      const dom = document.getElementById(id);
      if (dom) {
        dom.scrollIntoView({
          behavior: "smooth",
          block: "start",
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
    <div className={styles.content}>
      <div className="container">
        {data?.map((v) => (
          <div key={v?.id} id={`contest-${v?.id}`}>
            <div className={styles.contest}>
              <div className={styles.title}>
                {getTransResult(
                  lang,
                  v?.attributes?.titleZh,
                  v?.attributes?.titleEn
                )}
              </div>
              <div className={styles.intro}>
                <div className={styles.left}>
                  <div className={styles.description}>
                    {getTransResult(
                      lang,
                      v?.attributes?.descriptionZh,
                      v?.attributes?.descriptionEn
                    )}
                  </div>
                  <a href={v?.attributes?.link} className={styles.link}>
                    {v?.attributes?.link}
                  </a>
                </div>
                <div className={styles.right}>
                  <img
                    src={getTransResult(
                      lang,
                      v?.attributes?.contestImgZh?.data?.attributes?.url,
                      v?.attributes?.contestImgEn?.data?.attributes?.url
                    )}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Divider className={styles.divider} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
