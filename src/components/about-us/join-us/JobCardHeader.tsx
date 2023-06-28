import {
  Space,
  Row,
  Card,
  Typography,
  Button,
} from "antd";
import {
  ClockCircleOutlined,
  BranchesOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import styles from "./JobCardHeader.module.scss";
import { useState } from "react";
import Link from "next/link";
const { Title, Text } = Typography;

const JobCardHeader: React.FC<{ showExplandBtn?: boolean }> = ({ showExplandBtn = true }) => {
  const [isExpland, setIsExpland] = useState<boolean>(false);
  const handlerExpland = () => {
    setIsExpland(!isExpland);
  };
  return (
    <>
      <Card
        className={styles.cardContainer}
        style={isExpland ? { borderRadius: '10px 10px 0 0' } : { borderRadius: 10 }}
        onClick={handlerExpland}
      >
        <Row>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title className={styles.JobCardTitle}>Admissions Counselor</Title>
            {showExplandBtn && (
              <Button
                className={`${styles.explandBtn} ${isExpland ? styles.explandIcon : ""
                  }`}
                icon={<DownCircleOutlined />}
              ></Button>
            )}

          </div>
        </Row>
        <Row>
          <Text className={styles.JobCardDescription}>
            We are looking for a admissions counselor to jion our team.
          </Text>
        </Row>
        <Row>
          <Space
            direction="horizontal"
            align="center"
            className={styles.iconsButtonRow}
          >
            <div className={styles.iconBox}>
              <div>
                <ClockCircleOutlined style={{ color: "#666666" }} />
                <Text className={styles.iconText}>Full time</Text>
              </div>
              <div style={{ marginLeft: 20 }}>
                <BranchesOutlined style={{ color: "#666666" }} />
                <Text className={styles.iconText}>remote</Text>
              </div>
            </div>
            {showExplandBtn && (
              <Link className={styles.applyBtn} href="/about-us/join-us/submit-resume">Apply Now</Link>
            )}

          </Space>
        </Row>
      </Card>
    </>
  );
};

export default JobCardHeader;
