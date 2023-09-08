import React from "react";
import CommonBanner from "@/components/common/common-banner";

const Banner: React.FC = () => {
  const paragraph = (
    <>
      X-Camp aims to create a supportive and inclusive coding
      <br />
      community  with our dedicated partners
      <br />
      Please send your inquiry to info@x-camp.org
    </>
  );

  return (
    <CommonBanner
      image={"/image/about-us/achievements-banner.png"}
      title="Partners"
      paragraph={paragraph}
    />
  );
};

export default Banner;
