import React from "react";
import CommonBanner from "@/components/common/common-banner";

const Banner: React.FC = () => {
  const paragraph = (
    <>
      Since its inception, X - Camp has had over 1,000 students
      <br />
      cand is currently enrolling over 500 + students in 250 +
      <br />
      schools around the world.
    </>
  )

  return (
    <CommonBanner
      image={"/image/about-us/x-alumni-banner.png"}
      title="X-Alumni"
      paragraph={paragraph}
    />
  );
};

export default Banner;
