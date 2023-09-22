/**
 * title null | string | TemplateString // TemplateString 表示支持
 * description null | string | string[]
 * keywords null | string | string[]
 * page页面用到的metadata
 */
export const generateMetadata = (title: string) => {
  return {
    title: `${title} | X-Camp Academy | Coding Classes for All`,
    description: [
      'X-Camp Academy a silicon valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. With a curriculum developed by programming competition veteran Xianyou Xu, students have won four International Olympiad in Informatics (IOI) gold medals and one IOI silver medal.',
      'From beginner level Python to classic C++, X-Camp offers 18 courses with incremental levels of difficulty for students between grades 6-12 with divergent coding backgrounds.'
    ],
    keywords: 'USACO, X-Camp, XCamp, X Camp, IOI, International Olympiad in Informatics, Bay Area, Coding School, C++, Python, Coding Contest'
  };
};
