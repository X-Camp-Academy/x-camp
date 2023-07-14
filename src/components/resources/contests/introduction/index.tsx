import React from "react";
import styles from "./index.module.scss";
import { Divider } from "antd";
import { GetNewEvent } from "@/apis/strapi-client/define";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";

interface Props {
  data: StrapiResponseDataItem<GetNewEvent>[] | undefined;
}

const Introduction = ({ data }: Props) => {
  const { lang } = useLang();

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
