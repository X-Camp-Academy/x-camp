import React from "react";
import CommonBanner from "@/components/common/common-banner";

const Banner: React.FC = () => {
  const paragraph = (
    <>
      {"Encourage your friend's kids AND your kid's friends to"}
      <br />
      join our coding program.
      <br />
      Earn $100 for you and $50  for each friend that signs up.
    </>
  )

  return (
    <CommonBanner
      image={"/image/about-us/student-recommend-banner.png"}
      title="Referral Program"
      paragraph={paragraph}
    />
  );
};

export default Banner;
