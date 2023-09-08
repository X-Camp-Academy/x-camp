import React from "react";
import { Space, Row, Col, Image, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./Banner.module.scss";
import CommonBanner from "@/components/common/common-banner";

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      Since X-Camp was established, USACO has achieved
      <br />
      problem-solving skills of our students. We strive to teach not only
      <br />
      remarkable results as our students&apos; side project on
      <br />
      their learning journey.
    </>
  );

  return (
    <div className={styles.bannerContainer}>
      <CommonBanner
        image={"/image/about-us/banner-joinUs.png"}
        title={t("SchoolCalendar")}
        titleClassName={styles.title}
        paragraphClassName={styles.paragraph}
        paragraph={paragraph}
      />
    </div>
  );
};

export default Banner;
