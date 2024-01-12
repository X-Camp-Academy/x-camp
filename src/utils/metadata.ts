export enum PageTitle {
  Home = 'Home',

  Achievements = 'Achievements',
  Calendar = 'Calendar',
  ContactUs = 'Contact Us',
  HelpCenter = 'Help Center',
  Introduction = 'Introduction',
  JoinUs = 'Join Us',
  SubmitResume = 'Submit Resume',
  News = 'News',
  Partners = 'Partners',
  PrivacyPolicy = 'Privacy Policy',
  StudentRecommend = 'Student Recommend',
  XAlumni = 'XAlumni',

  AllCourses = 'All Courses',
  AllClasses = 'All Classes',
  CourseDetail = 'Course Detail',
  CampsDetail = 'Camps Detail',

  Contests = 'Contests',
  EducationForum = 'Education Forum',
  ArticleDetail = 'Article Detail',
  UsacoLiveSolutions = 'USACO Live Solutions',
  WeeklyOpenHouse = 'Weekly Open House',
  USACO = 'USACO',

  Login = 'Login',
  Forbidden = '403'
}

export const generateMetadata = (title: string) => {
  const defaultMetaData = {
    title: 'X-Camp Academy | Coding Classes for All',
    description: [
      'X-Camp Academy a silicon valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. With a curriculum developed by programming competition veteran Xianyou Xu, students have won four International Olympiad in Informatics (IOI) gold medals and one IOI silver medal.',
      'From beginner level Python to classic C++, X-Camp offers 18 courses with incremental levels of difficulty for students between grades 6-12 with divergent coding backgrounds.'
    ],
    keywords: 'USACO, X-Camp, XCamp, X Camp, IOI, International Olympiad in Informatics, Bay Area, Coding School, C++, Python, Coding Contest'
  };
  if (!title) {
    return defaultMetaData;
  }
  return {
    ...defaultMetaData,
    title: `${title} | X-Camp Academy | Coding Classes for All`
  };
};
