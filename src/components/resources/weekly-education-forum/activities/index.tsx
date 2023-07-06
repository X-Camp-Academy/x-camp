import React, { useState } from "react";
import styles from "./index.module.scss";
import ActivityItem, { ActivityItemProps } from "./activity-item";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { log } from "console";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

const Activities = () => {

  //useGetNewEvent

  const items: ActivityItemProps[] = [
    {
      title: "School life's sharing",
      description: "School life's sharing.",
      items: [
        /* {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        }, */
      ],
    },
    {
      title: "Coding Education",
      description: "Coding Education",
      items: [
        /* {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        }, */
      ],
    },
    {
      title: "Career Path",
      description: "Career Path",
      items: [
        /* {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        }, */
      ],
    },
    {
      title: "Research",
      description: "Research",
      items: [
        /* {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        },
        {
          img: "/image/about-us/introduction/top-banner.png",
          title: "2023 Spring APCS Class series are now open for story title ",
          time: "2023-04-10",
        }, */
      ],
    },
  ];


  const pageSize = 3;
  const { lang } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Event);

  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize
  });

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };


  if (newEventData?.data) {

    //School life's sharing 部分
    items[0].items = newEventData.data.map((item, index) => {
      return {
        title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
        img: getImgUrl(item?.attributes?.img),
        time: item?.attributes?.datetime.substring(0,9)
      }
    });


    // Coding Education
    items[1].items = newEventData.data.map((item, index) => {
      return {
        title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
        img: getImgUrl(item?.attributes?.img),
        time: item?.attributes?.datetime.substring(0,9)
      }
    });

    //Career Path
    items[2].items = newEventData.data.map((item, index) => {
      return {
        title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
        img: getImgUrl(item?.attributes?.img),
        time: item?.attributes?.datetime.substring(0,9)
      }
    });

    //Research
    items[3].items = newEventData.data.map((item, index) => {
      return {
        title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
        img: getImgUrl(item?.attributes?.img),
        time: item?.attributes?.datetime.substring(0,9)
      }
    });
  }

  return (
    <div className={styles.content}>
      <div className="container">
        {items?.map((v, index) => (
          <ActivityItem key={index} {...v} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
