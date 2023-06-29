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
              <div className={styles.title}>{"Contests"}</div>
              <div className={styles.description}>
                {`X-Camp will organize students to join different competitive programming contests yearly. We partner with distinguished contest partners from prestigious universities, high schools, and NGOs, for providing high-quality contest and community for students.`}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopBanner;
