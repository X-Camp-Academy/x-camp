import { Space, Image, Typography, Card, Popover } from "antd";
import styles from "./ReferralProgramMain.module.scss";
import React from "react";
import ColorfulCard from "@/components/common/colorful-card";
import { } from "@ant-design/icons";
import Link from "next/link";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph } = Typography;

const ReferralProgramMain: React.FC = () => {
  const { format: t } = useLang();
  return (
    <>
      <div className={styles.referralProgramMainContainer}>
        <div className={`${styles.referralProgramMain} container`}>
          <ColorfulCard border="bottom" index={1} animate={false}>
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
                <a href="https://www.youtube.com/@xcampacademy">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/Youtube-fill.png"
                    width={28}
                    height={28}
                  />
                </a>
                <a href="https://www.facebook.com/XCampAcademy2017">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/facebook-fill.png"
                    width={28}
                    height={28}
                  />
                </a>
                <a href="https://www.linkedin.com/company/x-camp-academy/">
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/linkedin-fill.png"
                    width={28}
                    height={28}
                  />
                </a>
                <Popover content={<img src="/image/QRCode/weChatQR.jpg" alt="QRCode" style={{ width: '100px', height: '100px' }} />}>
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/wechat-fill.png"
                    width={28}
                    height={28}
                  />
                </Popover >
                <Popover content={<img src="/image/QRCode/xiaoRedBookQR.png" alt="QRCode" style={{ width: '100px', height: '100px' }} />}>
                  <Image
                    alt=""
                    preview={false}
                    src="/image/about-us/student-recommend/xiaoredbook.png"
                    width={28}
                    height={28}
                  />
                </Popover>
              </Space>
            </Card>
          </ColorfulCard>
        </div>
      </div>
    </>
  );
};

export default ReferralProgramMain;
