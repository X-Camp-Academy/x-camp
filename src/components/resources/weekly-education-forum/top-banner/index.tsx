import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Carousel } from "antd";
const cx = classNames.bind(styles);

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={cx("container", styles.content)}>
        <Carousel className={styles.carousel} dots={{ className: styles.dots }}>
          {[1, 2, 3]?.map((v, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.title}>{"Weekly Education Forum"}</div>
              <div className={styles.description}>
                {`Provide support to the community of teenagers and parents who love programming education.
              Invite experienced speakers to share in our community.`}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopBanner;
