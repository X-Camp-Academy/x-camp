import { Space, Typography, Button } from "antd";
import styles from "./WhyWorkWithUs.module.scss";
const { Title, Paragraph } = Typography;

const WhyWorkWithUs: React.FC = () => {
  return (
    <>
      <div className={styles.WhyWorkWithUsContainer}>
        <div className={`${styles.WhyWorkWithUs} container`}>
          <Space direction="vertical" style={{ textAlign: "center" }}>
            <Title className={styles.title}>Why work with us</Title>
            <Paragraph className={styles.description}>
              X-Camp aim to employ the best people from a wide pool of talent in
              order to create an environment where everybody’s contribution is
              valued and respected. If a candidate is recommended by parents of
              X-Camp students and is offered, the student will receive a
              one-time $500 tuition waiver.
            </Paragraph>
            <Button className={styles.contactBtn}>{"Contact Us"}</Button>
          </Space>
        </div>
      </div>
    </>
  );
};

export default WhyWorkWithUs;
