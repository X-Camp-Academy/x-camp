import Link from "next/link";
import { XStarMenuItemType } from "./x-star-menu";
import { useRouter } from "next/navigation";
import { CalendarOutlined, UserAddOutlined } from "@ant-design/icons";

export const useMenuItems = () => {
  const router = useRouter();
  const menuItems: XStarMenuItemType[] = [
    {
      label: <Link href="/">Home</Link>,
      key: "/",
    },
    {
      label: <a>Courses</a>,
      key: "courses",
      dropdown: {
        left: {
          title: "Class Road Map",
          description:
            "X-Camp offers beginner to IOI level programming classes with structured, self-designed curriculum",
          btn: (
            <>
              <span onClick={() => router.push("/courses")}>
                {"Find My Class"}
              </span>
              <UserAddOutlined />
            </>
          ),
        },
        right: {
          title: "Course Catalog",
          description: "List of all courses in X-Camp 2023",
          action: () => router.push("/courses/catalog"),
        },
      },
      children: [
        {
          label: <Link href="/courses#classify0">Online Classes</Link>,
          key: "/courses/#classify0",
        },
        {
          label: (
            <Link href="/courses/100-probs-challenge">100 Prob Challenge</Link>
          ),
          key: "/courses/100-prob-challenge",
        },
        {
          label: <Link href="/courses/camps">In-person Camps</Link>,
          key: "/courses/in-person-campus",
        },
        {
          label: <Link href="/courses#classify5">APCS Classes</Link>,
          key: "/courses/#classify5",
        },
        {
          label: <Link href="/courses#classify3">Enhancement Classes</Link>,
          key: "/courses/enhancement-classes",
        },
        {
          label: (
            <a href="https://x-tutors.org/" target="_blank">
              X-Tutors
            </a>
          ),
          key: "x-tutors",
        },
      ],
    },
    {
      label: <Link href="/">Resources</Link>,
      key: "resources",
      dropdown: {
        left: {
          title: "School Calendar",
          description:
            "X-Camp offers beginner to IOI level programming classes with structured, self-designed curriculum",
          btn: (
            <>
              <span>{"View Calendar"}</span>
              <CalendarOutlined />
            </>
          ),
        },
      },
      children: [
        {
          label: (
            <Link href="/resources/weekly-education-forum">
              Education Forum
            </Link>
          ),
          key: "/resources/weekly-education-forum/",
        },
        {
          label: <Link href="/">Turing cup</Link>,
          key: "/resources/turing-cup/",
        },
        {
          label: <Link href="/">USACO</Link>,
          key: "/resources/usaco/",
        },
        {
          label: <Link href="/resources/weekly-open-house">Open House</Link>,
          key: "/resources/weekly-open-house/",
        },
        {
          label: <Link href="/">X-Cup</Link>,
          key: "/resources/x-cup/",
        },
        {
          label: <Link href="/">ACSL</Link>,
          key: "/resources/acsl/",
        },
        {
          label: (
            <Link href="/resources/usaco-live-solutions">
              USACO Live Solution
            </Link>
          ),
          key: "/resources/usaco-live-solution/",
        },
        {
          label: <Link href="/">Teamscode</Link>,
          key: "teamscode",
        },
        {
          label: <Link href="/">Calico</Link>,
          key: "calico",
        },
        {
          label: <Link href="/resources/contests">Contests</Link>,
          key: "/resources/contests/",
        },

        {
          label: <Link href="/">Art of Programming</Link>,
          key: "art-of-programming",
        },
        {
          label: <Link href="/">Proco</Link>,
          key: "proco",
        },
      ],
    },
    {
      label: <Link href="/about-us/introduction">About Us</Link>,
      key: "about-us",
      dropdown: {
        left: {
          title: "School Calendar",
          description:
            "X-Camp offers beginner to IOI level programming classes with structured, self-designed curriculum",
          btn: (
            <>
              <span>{"View Calendar"}</span>
              <CalendarOutlined />
            </>
          ),
        },
      },
      children: [
        {
          label: <Link href="/about-us/introduction">Introduction</Link>,
          key: "introduction",
        },
        {
          label: <Link href="/about-us/calendar">School Calendar</Link>,
          key: "school-calendar",
        },
        {
          label: <Link href="/about-us/contact-us">Contact Us</Link>,
          key: "contact-us",
        },
        {
          label: <Link href="/about-us/achievements">Achievements</Link>,
          key: "achievements",
        },
        {
          label: <Link href="/about-us/introduction">Faculty&Coach</Link>,
          key: "faculty&coach",
        },
        {
          label: <Link href="/about-us/join-us">Join Us</Link>,
          key: "join-us",
        },
        {
          label: <Link href="/about-us/partners">Partners</Link>,
          key: "partners",
        },
        {
          label: <Link href="/about-us/news">News</Link>,
          key: "news",
        },
        {
          label: <Link href="/about-us/help-center">Q&A</Link>,
          key: "help-center",
        },
        {
          label: <Link href="/about-us/x-alumni">X-Alumni</Link>,
          key: "x-alumni",
        },
        {
          label: (
            <Link href="/about-us/student-recommend">Referral Program</Link>
          ),
          key: "current-student-referral-program",
        },
      ],
    },
    {
      label: <Link href="/">Evaluation</Link>,
      key: "evaluation",
    },
  ];
  return menuItems;
};

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
