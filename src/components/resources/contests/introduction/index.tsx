import React from "react";
import styles from "./index.module.scss";
import { Divider } from "antd";
import { GetResourcesContest } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

interface Props {
  data: StrapiResponseDataItem<GetResourcesContest>[] | undefined;
}

const Introduction = ({ data }: Props) => {
  const { lang } = useLang();
  const items = [
    {
      title: "Art of Programming",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "USACO",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "Turing Cup",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "Teamscode",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "Calico",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "Proco",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "LIT",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "ACSL",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
    {
      title: "TACO",
      description:
        "Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming Art of Programming ",
      link: "https://www-new.x-camp.academy/",
      img: "/image/about-us/introduction/top-banner.png",
    },
  ];

  return (
    <div className={styles.content}>
      <div className="container">
        {data?.map((v) => (
          <div key={v?.id}>
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
                  <a
                    href={getTransResult(
                      lang,
                      v?.attributes?.linkZh,
                      v?.attributes?.linkEn
                    )}
                    className={styles.link}
                  >
                    {getTransResult(
                      lang,
                      v?.attributes?.linkZh,
                      v?.attributes?.linkEn
                    )}
                  </a>
                </div>
                <div className={styles.right}>
                  <img
                    src={getTransResult(
                      lang,
                      v?.attributes?.imgZh?.data?.attributes?.url,
                      v?.attributes?.imgEn?.data?.attributes?.url
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
