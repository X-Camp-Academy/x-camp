import { Row, Col, Space } from "antd";
import styles from "./index.module.scss";

export const RainbowCat = ({ text }: { text: string }) => (
  <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
    <Col style={{ textAlign: "center" }}>
      <Space direction="vertical" size={20}>
        <img
          src="https://static.production.xjoi.net/images/emoticon-1.gif"
          alt=""
        />
        <Space>
          {text}
          <span className={styles.dot}>...</span>
        </Space>
      </Space>
    </Col>
  </Row>
);
