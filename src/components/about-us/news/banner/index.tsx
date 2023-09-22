import CommonBanner from '@/components/common/common-banner';
import React from 'react';

const Banner: React.FC = () => {
  const paragraph = (
    <>
      Stay informed about new program launches
      <br />
      events, and exciting achievements of our
      <br />
      students and partners.
    </>
  );

  return <CommonBanner image={'/image/about-us/achievements-banner.png'} title="News" paragraph={paragraph} />;
};

export default Banner;
