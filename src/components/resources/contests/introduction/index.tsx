import React from "react";
import styles from "./index.module.scss";
import { Divider, Space } from "antd";

const Introduction = () => {
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
        {items?.map((v, index) => (
          <div key={index}>
            <div className={styles.contest}>
              <div className={styles.title}>{v?.title}</div>
              <div className={styles.intro}>
                <div className={styles.left}>
                  <div className={styles.description}>{v?.description}</div>
                  <a href={v?.link} className={styles.link}>
                    {v?.link}
                  </a>
                </div>
                <div className={styles.right}>
                  <img src={v?.img} alt="" />
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
