import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Col, Pagination, Row, Space } from "antd";
import { ClockCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import ColorfulCard from "@/components/common/colorful-card";
import XCollapse from "@/components/common/collapse";

export interface ActivityItemProps {
  title?: string;
  description?: string;
  items: { img?: string; title?: string; time?: string }[];
}

const ActivityItem = ({ title, description, items }: ActivityItemProps) => {
  const pageSize = 12;
  const [current, setCurrent] = useState(1);
  return (
    <div className={styles.content}>
      <div className="container">
        <XCollapse header={{ title, description }}>
          <Row className={styles.cards} gutter={[32, 32]}>
            {items
              ?.slice((current - 1) * pageSize, current * pageSize)
              ?.map((v, index) => (
                <Col key={index} md={24} lg={8}>
                  <ColorfulCard border={"bottom"} animate={false} index={index}>
                    <div className={styles.card}>
                      <img src={v?.img} alt="" />
                      <Space
                        direction="vertical"
                        className={styles.cardContent}
                      >
                        <div className={styles.title}>
                          {v?.title}
                          <Button
                            type="link"
                            className={styles.btn}
                            icon={<RightCircleOutlined />}
                          />
                        </div>
                        <div className={styles.description}>
                          <div>
                            <ClockCircleOutlined className={styles.icon} />
                            {v?.time}
                          </div>
                        </div>
                      </Space>
                    </div>
                  </ColorfulCard>
                </Col>
              ))}
          </Row>
          {items?.length > 12 && (
            <Pagination
              className={styles.pagination}
              pageSize={pageSize}
              current={current}
              total={items?.length}
              onChange={(page) => setCurrent(page)}
            />
          )}
        </XCollapse>
      </div>
    </div>
  );
};

export default ActivityItem;
