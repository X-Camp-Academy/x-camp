import CommonBanner from '@/components/common/common-banner';

const Banner: React.FC = () => {
  return (
    <CommonBanner
      title={'Customized Learning Tracks'}
      paragraph={'Track progress with weekly assignments and a 24/7 online forum for learning.'}
      image={'/image/about-us/learning-tracks/banner.png'}
    />
  );
};

export default Banner;
