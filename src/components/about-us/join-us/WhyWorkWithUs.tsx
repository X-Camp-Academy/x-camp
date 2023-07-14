import { Space, Typography, Button, Card } from "antd";
import styles from "./WhyWorkWithUs.module.scss";
import ColorfulCard from "@/components/common/colorful-card";
import { useLang } from "@/hoc/with-intl/define";
import { useRouter } from "next/navigation";
const { Title, Paragraph } = Typography;

const WhyWorkWithUs = () => {
  const { format: t } = useLang();
  const router = useRouter();
  return (
    <>
      <div className={styles.WhyWorkWithUsContainer}>
        <div className={`${styles.WhyWorkWithUs} container`}>
          <ColorfulCard border="bottom" index={1}>
            <Card className={styles.card}>
              <Space direction="vertical" style={{ textAlign: "center" }}>
                <Title className={styles.title}>{t("WhyWorkWithUs")}</Title>
                <Paragraph className={styles.description}>
                  {t("WhyWorkWithUs.Desc")}
                </Paragraph>
                <Button className={styles.contactBtn} onClick={() => { router.push('/about-us/contact-us') }}>{t("ContactUs")}</Button>
              </Space>
            </Card>
          </ColorfulCard>
        </div>
      </div>
    </>
  );
};

export default WhyWorkWithUs;
