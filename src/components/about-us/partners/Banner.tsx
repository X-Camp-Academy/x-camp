"use client";
import React from "react";
import { Space, Image, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import CommonBanner from "@/components/common/common-banner";
import styles from "./Banner.module.scss";

const { Title, Paragraph } = Typography;

const TopBanner: React.FC = () => {
  const { format: t } = useLang();
  const leftNode = (
    <Space direction="vertical">
      <Title className={styles.title}>{t("Partners")}</Title>
      <Paragraph className={styles.paragraph}>
        {t("Partner.Desc")}
        {
          <a
            href="mailto:info@x-camp.academy"
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#D46B14",
              lineHeight: "42px",
            }}
          >
            mailto info@x-camp.org
          </a>
        }
      </Paragraph>
    </Space>
  );
  const rightNode = (
    <div className={styles.imgContain}>
      <Image
        alt="image"
        src="/image/about-us/partners-banner.png"
        preview={false}
        className={styles.image}
      />
    </div>
  );
  return (
    // <CommonBanner leftNode={leftNode} rightNode={rightNode} />
    <></>
  );
};

export default TopBanner;
