import React from "react";
import CommonBanner from "@/components/common/common-banner";

const Banner: React.FC = () => {
  const paragraph = (
    <>
      Since X-Camp was established, our students have
      <br />
      achieved remarkable results in USACO as a side project
      <br />
      on their learning journey.
    </>
  )

  return (
    <CommonBanner
      image={"/image/about-us/achievements-banner.png"}
      title="Achievements"
      paragraph={paragraph}
    />
  );
};

export default Banner;
