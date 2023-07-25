import React from "react";
import { Row, Col } from "antd";
import styles from "./index.module.scss";

interface CommonBannerProps {
  leftNode: React.ReactNode;
  rightNode: React.ReactNode;
}

const CommonBanner: React.FC<CommonBannerProps> = ({ leftNode, rightNode }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14}>
            {leftNode}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
          >
            {rightNode}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CommonBanner;
