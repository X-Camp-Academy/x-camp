import dynamic from 'next/dynamic';
import React from 'react';

const CommonBanner = dynamic(() => import('@/components/common/common-banner'));

const Banner: React.FC = () => {
  const paragraph = (
    <>
      Provide support to the community of teenagers and
      <br />
      parents who love programming education.
      <br />
      Invite experienced speakers to share in our community.
    </>
  );

  return <CommonBanner image={'/image/about-us/student-recommend-banner.png'} title="Education Forum" paragraph={paragraph} />;
};

export default Banner;
