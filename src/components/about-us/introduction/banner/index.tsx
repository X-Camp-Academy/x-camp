import CommonBanner from '@/components/common/common-banner';
import React from 'react';

const Banner: React.FC = () => {
  const paragraph = (
    <>
      Since X-Camp was established, our students have
      <br />
      achieved remarkable results in USACO as a side project
      <br />
      on their learning journey.
    </>
  );
  return <CommonBanner image={'/image/about-us/introduction-banner.png'} title="X-Camp Academy" paragraph={paragraph} />;
};

export default Banner;
