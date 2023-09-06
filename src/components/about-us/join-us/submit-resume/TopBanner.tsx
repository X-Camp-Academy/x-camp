import { Button } from "antd";
import styles from "./TopBanner.module.scss";
import { useLang } from "@/hoc/with-intl/define";
import { useRouter } from "next/navigation";
import CommonBanner from "@/components/common/common-banner";
import React from "react";


const TopBanner = () => {
  const { format: t } = useLang();
  const router = useRouter();
  const paragraph = (
    <>
      X-Camp offers a wide range of career opportunities within
      <br />
      our company. Please note that all openings are based in
      <br />
      the Silicon Valley except for TAs.
    </>
  )
  return (
    <div className={styles.topBannerContainer}>
      <CommonBanner
        image={"/image/about-us/banner-joinUs.png"}
        title={t("Careers")}
        titleClassName={styles.title}
        paragraphClassName={styles.paragraph}
        paragraph={paragraph}
      />
      <Button size="large" className={styles.contactBtn} onClick={() => { router.push('/about-us/contact-us') }}>
        {t("ContactUs")}
        <img src="/image/about-us/comment.png" alt="" />
      </Button>
    </div>
  );
};

export default TopBanner;
