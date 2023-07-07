import React, { useState } from "react";
import styles from "./index.module.scss";
import ActivityItem, { ActivityItemProps } from "./activity-item";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { ActivityCategory, NewEventCategory } from "@/apis/strapi-client/define";
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
      items: [],
    },
    {
      title: "Coding Education",
      description: "Coding Education",
      items: [],
    },
    {
      title: "Career Path",
      description: "Career Path",
      items: [],
    },
    {
      title: "Research",
      description: "Research",
      items: [],
    },
  ];


  const pageSize = 12;
  const { lang } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Activity);

  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize
  });

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };


  if (newEventData?.data) {
    newEventData.data.forEach((item, index) => {
      if (item.attributes.activityCategory === ActivityCategory.SchoolLifeSharing) {
        items[0].items.push({
          title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
          img: getImgUrl(item?.attributes?.img),
          time: item?.attributes?.datetime?.substring(0, 9)
        })
      }
      else if (item.attributes.activityCategory === ActivityCategory.CodingEducation) {
        items[1].items.push({
          title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
          img: getImgUrl(item?.attributes?.img),
          time: item?.attributes?.datetime?.substring(0, 9)
        })
      }
      else if (item.attributes.activityCategory === ActivityCategory.CareerPath) {
        items[2].items.push({
          title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
          img: getImgUrl(item?.attributes?.img),
          time: item?.attributes?.datetime?.substring(0, 9)
        })
      }
      else if (item.attributes.activityCategory === ActivityCategory.Research) {
        items[3].items.push({
          title: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
          img: getImgUrl(item?.attributes?.img),
          time: item?.attributes?.datetime?.substring(0, 9)
        })
      }
    })
    
  }

  return (
    <div className={styles.content}>
      <div className="container">
        {items?.map((v, index) => (
          /* 新版UI的分页器待完成 */
          <ActivityItem key={index} {...v} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
