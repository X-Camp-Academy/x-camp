import React from "react";
import styles from "./index.module.scss";
import { Space } from "antd";

const JoinWay = () => {
  return (
    <div className={"container"}>
      <div className={styles.description}>
        {
          "During the open house, our course consultant will introduce X-Camp’s systematic course design, evaluate students' programming level, and provide a programming learning plan to you."
        }
      </div>
      <Space direction="vertical" size={20}>
        <div>
          <div className={styles.title}>{"Date and Time:"}</div>
          <div className={styles.time}>
            {"Tuesday, Weekly, 6:30 - 7:30 PM PDT"}
          </div>
        </div>
        <div>
          <div className={styles.title}>{"Click and Join:"}</div>
          <a
            className={styles.link}
            href={
              "https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUK9SdXM0KzjqQT09"
            }
          >
            {
              "https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUK9SdXM0KzjqQT09"
            }
          </a>
        </div>
      </Space>
    </div>
  );
};

export default JoinWay;
