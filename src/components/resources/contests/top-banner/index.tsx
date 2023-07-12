import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={cx("container", styles.content)}>
        <div className={styles.left}>
          <div className={styles.title}>{"Contests"}</div>
          <div className={styles.description}>
            {`X-Camp will organize students to join different competitive programming contests yearly. We partner with distinguished contest partners from prestigious universities, high schools, and NGOs, for providing high-quality contest and community for students.`}
          </div>
        </div>
        <div className={styles.right}>
          <img src="/image/resources/contests-banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
