import { Space, Typography, Button } from "antd";
import styles from "./BecomePartner.module.scss";
import ColorfulCard from "@/components/common/colorful-card";
import { EditOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph } = Typography;

const BecomePartner = () => {
  const { format: t } = useLang();
  return (
    <>
      <div className={styles.becomePartnerContainer}>
        <div className={`${styles.becomePartner} container`}>
          <ColorfulCard border={"bottom"} index={0} animate={false}>
            <Space direction="vertical" className={styles.content}>
              <Title className={styles.title}>{t("BecomeOurPartner")}</Title>
              <Paragraph className={styles.description}>
                {t("BecomeOurPartner.Desc")}
              </Paragraph>
              <Button className={styles.contactBtn}>
                {t("JoinUs")}
                <EditOutlined />
              </Button>
            </Space>
          </ColorfulCard>
        </div>
      </div>
    </>
  );
};

export default BecomePartner;
