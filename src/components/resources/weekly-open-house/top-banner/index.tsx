import React from "react";
import styles from "./index.module.scss";
import { Button } from "antd";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={cx("container", styles.content)}>
        <div className={styles.title}>{"Weekly Open House"}</div>
        <div className={styles.description}>
          {
            "Since 2022 spring quarter, X-Camp provides a weekly open house for students and parents who are interested in X-Camp."
          }
        </div>
        <Button type="primary" className={styles.btn}>
          {"Join The Meeting"}
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
