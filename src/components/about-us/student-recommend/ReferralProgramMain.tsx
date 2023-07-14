import { Space, Image, Typography, Card } from "antd";
import styles from "./ReferralProgramMain.module.scss";
import React from "react";
import ColorfulCard from "@/components/common/colorful-card";
import {} from "@ant-design/icons";
import Link from "next/link";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph } = Typography;

const ReferralProgramMain: React.FC = () => {
  const { format: t } = useLang();
  return (
    <>
      <div className={styles.referralProgramMainContainer}>
        <div className={`${styles.referralProgramMain} container`}>
          <ColorfulCard border="bottom" index={1}>
            <Card className={styles.giveAndGetCard}>
              <Title className={styles.title}>{t("Refer.Title")}</Title>
              <Paragraph className={styles.description}>
                {t("Refer.Desc")}
              </Paragraph>
              <Title className={styles.subTitle}>
                {t("Earn")} <span>$50</span>
                {t("ForYouAnd")}
                <span>$50</span>
                {t("ForYourFriend")}
              </Title>
              <Space>
                <Link href="/">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/Youtube-fill.png"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/facebook-fill.png"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/linkedin-fill.png"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/twitter.png"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/wechat-fill.png"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/xiaoredbook.png"
                    width={28}
                    height={28}
                  />
                </Link>
              </Space>
            </Card>
          </ColorfulCard>
        </div>
      </div>
    </>
  );
};

export default ReferralProgramMain;
