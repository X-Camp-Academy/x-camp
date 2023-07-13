"use client";
import React from "react";
import { Row, Col } from "antd";
import styles from "./AddressMap.module.scss";
import { useMobile } from "@/utils";

const AddressMap: React.FC = () => {
  const isMobile = useMobile();

  return (
    <div className={`${styles.addressMapContent} container`}>
      <Row gutter={[32, 16]}>
        {/* <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 10 }}
        >
          <Title>X-Camp Academy</Title>
          <br />
          <Paragraph style={{ fontSize: 20 }}>
            <strong>School Address:</strong> 4950 Mitty Way, San Jose, CA 95129
            USA
          </Paragraph>
          <Paragraph style={{ fontSize: 20 }}>
            <strong>Office Address:</strong> 12280 Saratoga Sunnyvale Rd, #203
            CA 95070
          </Paragraph>
        </Col> */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <iframe
            title="Google Maps"
            aria-label="Google Maps"
            src="https://www.google.com/maps/d/embed?mid=1kV6Z3Mv3d8Z-1rtLqP9rXmX3QPh_ivth&ehbc=2E312F"
            width={"100%"}
            height={isMobile ? 400 : 480}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AddressMap;
