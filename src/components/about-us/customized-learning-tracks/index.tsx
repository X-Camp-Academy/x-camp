'use client';

import { useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { useMobile } from '@/utils';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import styles from './index.module.scss';
import Banner from './pc/banner';
import DividerContent from './pc/divider-content';
import LearningTracks from './pc/learning-tracks';
const CustomizedLearningTracks = () => {
  const isMobile = useMobile();
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  const learnTrackContents = [
    {
      imageUrl: '/image/about-us/learning-tracks/weekly-assign.png',
      title: 'Weekly Assignment',
      titleIconUrl: '/image/about-us/learning-tracks/weekly-assgin-icon.png',
      content: 'Class lecturing is not enough for coding study, X-Camp will assign students with basic and bonus homework. Our auto-grading system and test case grading system is similar to USACO.',
      avatarUrl: '/image/about-us/learning-tracks/weekly-aggin-avatar.png',
      comment: '”Good and challenging homework problems.”- CS 301B'
    },
    {
      imageUrl: '/image/about-us/learning-tracks/awards.png',
      title: '4.0 Awards',
      titleIconUrl: '/image/about-us/learning-tracks/awards-icon.png',
      content: 'Full score 100% of all the homework and exams (including makeup homework and exams by the end of the quarter) will be eligible for an X-Camp 4.0 award! The more practice, the better!'
    },
    {
      imageUrl: '/image/about-us/learning-tracks/study-forum.png',
      title: '24/7 Study Forum',
      titleIconUrl: '/image/about-us/learning-tracks/study-forum-icon.png',
      content: 'A vibrant, interactive, discussion platform called Discourse where students can post questions, insights, and solutions.Our teaching team offering guidance and solutions 24/7.',
      avatarUrl: '/image/about-us/learning-tracks/study-forum-avatar.png',
      comment: '"The new platform is effective tool to engage everyone to share information and help each other" - CS 202',
      commentBg: '#ffffff'
    },
    {
      imageUrl: '/image/about-us/learning-tracks/office-hour.png',
      title: 'Office Hour & Live Homework Night',
      titleIconUrl: '/image/about-us/learning-tracks/office-hour-icon.png',
      content:
        "Besides regular Live office hours with TAs, Homework night will for students' homework problems and seek assistance if needed. We are proud to provide a collaborative learning experience in a variety of ways."
    },
    {
      imageUrl: '/image/about-us/learning-tracks/coach.png',
      title: 'Distinguished Coach-Guided for grandmaster students',
      titleIconUrl: '/image/about-us/learning-tracks/coach-icon.png',
      content:
        "As a unique and top resource in USACO grandmaster domains, our coaches regularly meet with students, closely follow up on students' performance, as well as set up personalized instructions and assignments.",
      avatarUrl: '/image/about-us/learning-tracks/coach-avatar.png',
      comment:
        '"CUSTOMIZED training makes sure students get enough support, like one of our teachers is a problem writer for China national training team." - X-Camp Alumni, USACO Finalist in 21/22 season'
    }
  ];
  return (
    <Layout className={styles.customizedContainer}>
      {isMobile ? (
        <></>
      ) : (
        <>
          <Banner />
          {learnTrackContents.map((item, index) => (
            <div key={item.title} style={{ backgroundColor: index % 2 === 0 ? '#F7F7F7' : '#EFEFEF' }}>
              {index === 2 && <DividerContent content={'"It is very organized and easy to navigate through. Also easy to use ."'} grade={'- CS 101P'} symbolPosition={'front'} />}
              <LearningTracks {...item} imagePosition={index % 2 === 0 ? 'left' : 'right'} />
              {index === 2 && <DividerContent content={'"The TAs are nice. They really helped my son by guiding him to solve the problem by himself."'} grade={'- CS 102P'} symbolPosition={'end'} />}
            </div>
          ))}
          <Reviews reviewsData={reviewsData} />
        </>
      )}
    </Layout>
  );
};

export default CustomizedLearningTracks;
