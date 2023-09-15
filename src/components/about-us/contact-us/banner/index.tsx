"use client";
import React from "react";
import { useLang } from "@/hoc/with-intl/define";
import CommonBanner from "@/components/common/common-banner";


const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      X-Camp Academy focuses on improving the coding abilities and
      <br />
      problem-solving skills of our students. We strive to teach not only
      <br />
      persistence in analytical thought, but also genuine curiosity whilst
      <br />
      facing new challenges.
    </>
  );
  return (
    <CommonBanner
      image={"/image/about-us/achievements-banner.png"}
      title={t("ContactXCamp")}
      paragraph={paragraph}
    />
  );
};

export default Banner;
