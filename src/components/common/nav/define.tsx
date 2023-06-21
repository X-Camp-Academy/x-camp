import { MenuProps } from "antd";
import Link from "next/link";
import { XStarMenuItemType } from "./x-star-menu";

export const menuItems: XStarMenuItemType[] = [
  {
    label: <Link href="/">Home</Link>,
    key: "/",
  },
  {
    label: <a>Courses</a>,
    key: "courses",
    dropdown: {
      left: {
        title: "X-Camp Class Road Map",
        description:
          "学习路线简介学习路线简介学习路线简介学习路线简介学习路线简介学习路线简介",
        btn: "Find My Class",
      },
      right: {
        title: "Course Catalog",
        description: "List of all courses in X-Camp 2023",
      },
    },
    children: [
      {
        label: <Link href="/">Online Classes</Link>,
        key: "online-classes",
      },
      {
        label: <Link href="/">In-person Campus</Link>,
        key: "in-person-campus",
      },
      {
        label: <Link href="/">Enhancement Classes</Link>,
        key: "enhancement-classes",
      },
      {
        label: <Link href="/">100 Prob Challenge</Link>,
        key: "100-prob-challenge",
      },
      {
        label: <Link href="/">APCS Classes</Link>,
        key: "apcs-classes",
      },
      {
        label: <Link href="/">X-Tutors</Link>,
        key: "x-tutors",
      },
    ],
  },
  {
    label: <Link href="/resources">Resources</Link>,
    key: "resources",
    dropdown: {
      left: {
        title: "X-Camp School Calendar",
        description:
          "X-Camp学校日历展示本年度的开学和结束课程时间,教育论坛和比赛等",
        btn: "View Calendar",
      },
    },
    children: [
      {
        label: <Link href="/">Weekly Education Forum</Link>,
        key: "weekly-education-forum",
      },
      {
        label: <Link href="/">Weekly Open House</Link>,
        key: "weekly-open-house",
      },
      {
        label: <Link href="/">USACo Live solution</Link>,
        key: "usaco-live-solution",
      },
      {
        label: <Link href="/">Contests</Link>,
        key: "contests",
      },
      {
        label: <Link href="/">Turing cup</Link>,
        key: "turing-cup",
      },
      {
        label: <Link href="/">X-Cup</Link>,
        key: "x-cup",
      },
      {
        label: <Link href="/">Teamscode</Link>,
        key: "teamscode",
      },
      {
        label: <Link href="/">Art of Programming</Link>,
        key: "art-of-programming",
      },
      {
        label: <Link href="/">USACO</Link>,
        key: "usaco",
      },
      {
        label: <Link href="/">ACSL</Link>,
        key: "acsl",
      },
      {
        label: <Link href="/">Calico</Link>,
        key: "calico",
      },
      {
        label: <Link href="/">Proco</Link>,
        key: "proco",
      },
    ],
  },
  {
    label: <Link href="/">About Us</Link>,
    key: "about-us",
    dropdown: {
      left: {
        title: "X-Camp School Calendar",
        description:
          "X-Camp学校日历展示本年度的开学和结束课程时间,教育论坛和比赛等",
        btn: "View Calendar",
      },
    },
    children: [
      {
        label: <Link href="/about-us/introduction">Introduction</Link>,
        key: "introduction",
      },
      {
        label: <Link href="/">School Calendar</Link>,
        key: "school-calendar",
      },
      {
        label: <Link href="/">Contact Us</Link>,
        key: "contact-us",
      },
      {
        label: <Link href="/">Achievements</Link>,
        key: "achievements",
      },
      {
        label: <Link href="/">Faculty&Coach</Link>,
        key: "faculty&coach",
      },
      {
        label: <Link href="/">Join Us</Link>,
        key: "join-us",
      },
      {
        label: <Link href="/">Partners</Link>,
        key: "partners",
      },
      {
        label: <Link href="/">News</Link>,
        key: "news",
      },
      {
        label: <Link href="/">QA</Link>,
        key: "qa",
      },
      {
        label: <Link href="/">X-Alumni</Link>,
        key: "x-alumni",
      },
      {
        label: <Link href="/">Current Student Referral Program</Link>,
        key: "current-student-referral-program",
      },
    ],
  },
  {
    label: <Link href="/">Evaluation</Link>,
    key: "evaluation",
  },
];

/**
 * 去除dropdown属性
 * @param menuItems
 * @returns
 */
export const removeDropdown = (menuItems: XStarMenuItemType[]) => {
  return menuItems.map(({ dropdown, ...rest }) => {
    const newItem = { ...rest };

    if (newItem.children) {
      newItem.children = removeDropdown(newItem.children);
    }

    return newItem;
  });
};
