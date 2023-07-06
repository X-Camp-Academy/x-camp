import React from "react";
import styles from "./index.module.scss";
import ActivityItem, { ActivityItemProps } from "./activity-item";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";

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
      ],
    },
    {
      title: "Career Path",
      description: "Career Path",
      items: [
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
      ],
    },
    {
      title: "Research",
      description: "Research",
      items: [
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
      ],
    },
  ];



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
