/**
 * title null | string | TemplateString // TemplateString 表示支持
 * description null | string | string[]
 * keywords null | string | string[]
 * page页面用到的metadata
 */

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
  PrivacyPolicy = 'PrivacyPolicy',
  StudentRecommend = 'Student Recommend',
  XAlumni = 'X Alumni',

  Courses = 'Courses',
  CoursesCatalog = 'Courses Catalog',
  CourseDetail = 'Course Detail',
  CourseCamps = 'Course Camps',

  Contests = 'Contests',
  EducationForum = 'Education Forum',
  ArticleDetail = 'Article Detail',
  UsacoLiveSolutions = 'USACO Live Solutions',
  WeeklyOpenHouse = 'Weekly Open House',
  USACO = 'USACO',

  Assessment = 'Assessment',
  Login = 'Login'
}
export const generateMetadata = (title: string) => {
  // 每个页面传入不同的title
  // 根据title来区分不同的页面返回不同的SEO数据

  switch (title) {
    case PageTitle.Home:
      return {
        title: `${title} | X-Camp Academy | Coding Classes for All`,
        description: [
          'X-Camp Academy a silicon valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. With a curriculum developed by programming competition veteran Xianyou Xu, students have won four International Olympiad in Informatics (IOI) gold medals and one IOI silver medal.',
          'From beginner level Python to classic C++, X-Camp offers 18 courses with incremental levels of difficulty for students between grades 6-12 with divergent coding backgrounds.'
        ],
        keywords: 'USACO, X-Camp, XCamp, X Camp, IOI, International Olympiad in Informatics, Bay Area, Coding School, C++, Python, Coding Contest'
      };
    case PageTitle.Achievements:
      return {
        title: `${title} | X-Camp Academy | Coding Classes for All`,
        description: [
          'X-Camp Academy a silicon valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. With a curriculum developed by programming competition veteran Xianyou Xu, students have won four International Olympiad in Informatics (IOI) gold medals and one IOI silver medal.',
          'From beginner level Python to classic C++, X-Camp offers 18 courses with incremental levels of difficulty for students between grades 6-12 with divergent coding backgrounds.'
        ],
        keywords: 'USACO, X-Camp, XCamp, X Camp, IOI, International Olympiad in Informatics, Bay Area, Coding School, C++, Python, Coding Contest'
      };
    case PageTitle.Calendar:
      return {
        title: `${title} | X-Camp Academy | Coding Classes for All`,
        description: [
          'X-Camp Academy a silicon valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. With a curriculum developed by programming competition veteran Xianyou Xu, students have won four International Olympiad in Informatics (IOI) gold medals and one IOI silver medal.',
          'From beginner level Python to classic C++, X-Camp offers 18 courses with incremental levels of difficulty for students between grades 6-12 with divergent coding backgrounds.'
        ],
        keywords: 'USACO, X-Camp, XCamp, X Camp, IOI, International Olympiad in Informatics, Bay Area, Coding School, C++, Python, Coding Contest'
      };

    default:
      return {
        title: 'X-Camp Academy | Coding Classes for All',
        description: [
          'X-Camp Academy a silicon valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. With a curriculum developed by programming competition veteran Xianyou Xu, students have won four International Olympiad in Informatics (IOI) gold medals and one IOI silver medal.',
          'From beginner level Python to classic C++, X-Camp offers 18 courses with incremental levels of difficulty for students between grades 6-12 with divergent coding backgrounds.'
        ],
        keywords: 'USACO, X-Camp, XCamp, X Camp, IOI, International Olympiad in Informatics, Bay Area, Coding School, C++, Python, Coding Contest'
      };
  }
};
