import XCollapse from "@/components/common/collapse";
import styles from "./index.module.scss";
import React from "react";
import { Button, Col, Row, Space } from "antd";
import ColorfulCard from "@/components/common/colorful-card";
import { AlignRightOutlined, RightCircleOutlined } from "@ant-design/icons";

const RecentActivities = () => {
  return (
    <div className={styles.content}>
      <div className="container">
        <XCollapse
          header={{
            title: "Recent popular activities",
            description: "Recent popular activities",
          }}
        >
          <Row className={styles.cards} gutter={[32, 32]}>
            {[1, 2, 3]?.map((v, index) => (
              <Col key={index} md={24} lg={8}>
                <ColorfulCard border={"bottom"} animate={false} index={index}>
                  <Space direction="vertical" className={styles.card}>
                    <img
                      src="/image/about-us/introduction/top-banner.png"
                      alt=""
                    />
                    <div className={styles.title}>
                      {"2023 Spring APCS Class series are now"}
                    </div>
                    <div className={styles.description}>
                      <div>
                        <AlignRightOutlined className={styles.icon} />
                        {"Coding Education"}
                      </div>
                      <Button
                        type="link"
                        className={styles.btn}
                        icon={<RightCircleOutlined />}
                      />
                    </div>
                  </Space>
                </ColorfulCard>
              </Col>
            ))}
          </Row>
        </XCollapse>
      </div>
    </div>
  );
};

export default RecentActivities;
