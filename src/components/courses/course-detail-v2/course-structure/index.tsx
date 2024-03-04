import { useContext, useState } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

const courses = [
  {
    level: 100,
    title: 'Python with creative project',
    long: 'Gain hands-on experience in Python programming through creative projects, fostering confidence and a passion for coding. This course ensures a valuable and engaging learning experience without compromising the depth of text-based coding.',
    short: 'Python intro with visual creative projects. no coding experience expected. For 5+ Graders.'
  },
  {
    level: 101,
    title: 'Introduction to Python Data Structure and Algorithms',
    long: 'A college beginner-level class providing fundamental Python coding knowledge. Students will delve into programming basics and work on projects like creating a blackjack game, setting the stage for a solid understanding of data structures and algorithms.',
    short: 'College beginner level Python data structure and algorithms. Able to create games, e.g. Blackjack.'
  },
  {
    level: 102,
    title: 'Basic algorithm and data structure',
    long: 'College beginner-level class covering essential algorithms applicable to more advanced projects, such as developing a snake game. Equip students with the skills to tackle easy coding interview questions at high-tech companies.',
    short: 'Sorting algorithms in Python for easy interview problems at high-tech companies.'
  },
  {
    level: 200,
    title: 'Problem decomposition with iteration and recursion in C++',
    long: 'Build a strong foundation in recursive thinking and problem-solving using C++. This freshman-level college class enhances proficiency in C++ skills while emphasizing problem decomposition through iteration and recursion.',
    short: 'Recursive programming in C++. Emphasizing problem decomposition skills.'
  },
  {
    level: 201,
    title: 'Depth first search deep dive',
    long: 'College Intermediate-level class provides a comprehensive understanding of depth-first search, a versatile algorithm with applications in planning, traversing, and more. Develop problem-solving skills essential for various projects.',
    short: 'College intermediate-level algorithms, with applications in planning, traversing, etc.'
  },
  {
    level: 202,
    title: 'Breadth first search',
    long: 'Intermediate-level college class emphasizing problem-solving skills and C++ proficiency to create projects spanning robotics, AI, and games. These 200-level classes prepare students to address medium coding interview questions at high-tech companies.',
    short: 'Breadth-first search (BFS), medium high-tech interview questions.'
  },
  {
    level: 300,
    title: 'Introduction to order-based strategy and algorithms',
    long: 'College advanced level class providing foundational knowledge for software engineering coding assessments and college research, focusing on order-based strategies and algorithms.',
    short: 'order-based algorithms at college advanced level.'
  },
  {
    level: 301,
    title: 'Dynamic programming foundation.',
    long: 'College advanced-level class delving into advanced knowledge for software engineering coding assessments, with a specific focus on dynamic programming techniques.',
    short: 'One of the most popular algorithms (DP) at college advanced level.'
  },
  {
    level: 302,
    title: 'Introduction to Tree and graph algorithms',
    long: 'College advanced level class building a strong foundation in advanced knowledge relevant to college research. These 300-level classes equip students to address difficult coding interview questions, often the final round, at high-tech companies.',
    short: 'Complete the difficult interview questions on the most popular data structures - tree and graph.'
  }
].map((v, index) => ({ ...v, url: `/image/course-detail/lv${index + 1}.png`, activeUrl: `/image/course-detail/activeLv${index + 1}.png` }));

const CourseStructure = () => {
  const courseData = useContext(CourseClassesContext);
  const [active, setActive] = useState(courseData?.courseLevel);

  return (
    <div className={styles.structure}>
      <div className={'container'}>
        <div className="tabTitle">{'Course Structure'}</div>
        <div className={styles.intro}>
          {courses?.map((v, index) => (
            <div className={`${styles.course} ${active === v?.level ? styles.active : ''}`} key={v.level} onClick={() => setActive(v?.level)}>
              <img style={{ display: active === v?.level ? undefined : 'none' }} src={v?.activeUrl} alt="" />
              <img style={{ display: active === v?.level ? 'none' : undefined }} src={v?.url} alt="" />
              <div className={styles.text}>
                <span className={styles.number}>{`0${index + 1}`}</span>
                <span className={styles.level}>{v?.level}</span>
                <div className={styles.title}>{v?.title}</div>
                <div className={styles.long}>{v?.long}</div>
                <span className={styles.lv}>{`LV${index + 1}`}</span>
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.mobileIntro}>
          <div className={styles.title}>title</div>
        </div> */}
      </div>
    </div>
  );
};

export default CourseStructure;
