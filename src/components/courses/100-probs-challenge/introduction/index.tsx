import React from "react";
import styles from "./index.module.scss";
import { Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";

const Introduction = () => {
  return (
    <div className="container">
      <Space direction="vertical" size={"large"} className={styles.content}>
        <div>
          <div className={styles.title}>Prerequisites:</div>
          <div className={styles.description}>
            6th graders to 12th graders with coding experience. 100 opening
            spots for <span>Non X-Camp students</span>
          </div>
        </div>
        <div>
          <div className={styles.title}>Challenge Window:</div>
          <div className={styles.description}>
            1-month, two sessions per year (Summer + Winter quarter)
          </div>
        </div>
        <Space>
          <Button className={styles.btn}>
            {"Registration"}
            <EditOutlined />
          </Button>
          <div className={styles.tip}>
            {"*Fall Challenge will be held in October"}
          </div>
        </Space>
        <div>
          <div className={styles.title}>Challenge Rules:</div>
          <div className={styles.description}>
            <li>
              Students must complete each line of code by themselves. Copying
              code is strictly prohibited.
            </li>
            <li>
              Students are not allowed to refer to the answers or use their past
              code. Although there may be previous assignments from X-Camp or
              past USACO questions in the problems.Must start writing codes from
              a blank page.
            </li>
            <li>
              If a student is found to be copying code, they will immediately
              lose their eligibility to participate.
            </li>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default Introduction;
