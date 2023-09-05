import React from "react";
import CommonBanner from "@/components/common/common-banner";

const Banner: React.FC = () => {
  const paragraph = (
    <>
      Here we provide helpful instructions to ensure a
      <br />
      seamless and efficient resolution to any concerns or
      <br />
      challenges you may encounter.
    </>
  )

  return (
    <CommonBanner
      image={"/image/about-us/student-recommend-banner.png"}
      title="Help Center "
      paragraph={paragraph}
    />
  );
};

export default Banner;
