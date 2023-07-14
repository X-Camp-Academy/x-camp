import Link from "next/link";
import { XStarMenuItemType } from "./x-star-menu";
import { useRouter } from "next/navigation";
import { CalendarOutlined, UserAddOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";

export const useMenuItems = () => {
  const router = useRouter();
  const { format: t } = useLang();
  const menuItems: XStarMenuItemType[] = [
    {
      label: <Link href="/">{t("Home")}</Link>,
      key: "/",
    },
    {
      label: <a>{t("Courses")}</a>,
      key: "/courses/",
      dropdown: {
        left: {
          title: t("ClassRoadMap"),
          description: t("Courses.LeftDescription"),
          btn: (
            <>
              <span onClick={() => router.push("/courses")}>
                {t("Courses.Btn")}
              </span>
              <UserAddOutlined />
            </>
          ),
        },
        right: {
          title: t("CourseCatalog"),
          description: t("Courses.RightDescription"),
          action: () => router.push("/courses/catalog"),
        },
      },
      children: [
        {
          label: <Link href="/courses#classify0">{t("OnlineClasses")}</Link>,
          key: "/courses/#classify0",
        },
        // {
        //   label: (
        //     <Link href="/courses/100-probs-challenge">100 Prob Challenge</Link>
        //   ),
        //   key: "/courses/100-prob-challenge",
        // },
        {
          label: <Link href="/courses/camps">{t("In-personCamps")}</Link>,
          key: "/courses/in-person-campus/",
        },
        {
          label: <Link href="/courses#classify5">{t("APCSClasses")}</Link>,
          key: "/courses/#classify5",
        },
        {
          label: (
            <Link href="/courses#classify3">{t("EnhancementClasses")}</Link>
          ),
          key: "/courses/enhancement-classes/",
        },
        {
          label: (
            <a href="https://x-tutors.org/" target="_blank">
              {t("X-Tutors")}
            </a>
          ),
          key: "x-tutors",
        },
      ],
    },
    {
      label: <Link href="/">{t("Resources")}</Link>,
      key: "resources",
      dropdown: {
        left: {
          title: t("SchoolCalendar"),
          description: t("SchoolCalendar.Description"),
          btn: (
            <>
              <span>{t("ViewCalendar")}</span>
              <CalendarOutlined />
            </>
          ),
        },
      },
      children: [
        {
          label: (
            <Link href="/resources/weekly-education-forum">
              {t("EducationForum")}
            </Link>
          ),
          key: "/resources/weekly-education-forum/",
        },
        {
          label: <Link href="/">{t("TuringCup")}</Link>,
          key: "/resources/turing-cup/",
        },
        {
          label: <Link href="/">USACO</Link>,
          key: "/resources/usaco/",
        },
        {
          label: (
            <Link href="/resources/weekly-open-house">{t("OpenHouse")}</Link>
          ),
          key: "/resources/weekly-open-house/",
        },
        {
          label: <Link href="/">{t("X-Cup")}</Link>,
          key: "/resources/x-cup/",
        },
        {
          label: <Link href="/">ACSL</Link>,
          key: "/resources/acsl/",
        },
        {
          label: (
            <Link href="/resources/usaco-live-solutions">
              {t("USACOLiveSolution")}
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
          label: <Link href="/resources/contests">{t("Contests")}</Link>,
          key: "/resources/contests/",
        },

        {
          label: <Link href="/">{t("ArtOfProgramming")}</Link>,
          key: "art-of-programming",
        },
        {
          label: <Link href="/">Proco</Link>,
          key: "proco",
        },
      ],
    },
    {
      label: <Link href="/about-us/introduction">{t("AboutUs")}</Link>,
      key: "about-us",
      dropdown: {
        left: {
          title: t("SchoolCalendar"),
          description: t("SchoolCalendar.Description"),
          btn: (
            <>
              <span>{t("ViewCalendar")}</span>
              <CalendarOutlined />
            </>
          ),
        },
      },
      children: [
        {
          label: <Link href="/about-us/introduction">{t("Introduction")}</Link>,
          key: "/about-us/introduction/",
        },
        {
          label: <Link href="/about-us/calendar">{t("SchoolCalendar")}</Link>,
          key: "/about-us/calendar/",
        },
        {
          label: <Link href="/about-us/contact-us">{t("ContactUs")}</Link>,
          key: "/about-us/contact-us/",
        },
        {
          label: <Link href="/about-us/achievements">{t("Achievements")}</Link>,
          key: "/about-us/achievements/",
        },
        {
          label: (
            <Link href="/about-us/introduction#faculty">
              {t("Faculty&Coach")}
            </Link>
          ),
          key: "/about-us/introduction#faculty",
        },
        {
          label: <Link href="/about-us/join-us">{t("JoinUs")}</Link>,
          key: "/about-us/join-us/",
        },
        {
          label: <Link href="/about-us/partners">{t("Partners")}</Link>,
          key: "/about-us/partners/",
        },
        {
          label: <Link href="/about-us/news">{t("News")}</Link>,
          key: "/about-us/news/",
        },
        {
          label: <Link href="/about-us/help-center">{t("Q&A")}Q&A</Link>,
          key: "/about-us/help-center/",
        },
        {
          label: <Link href="/about-us/x-alumni">{t("X_ALUMNI")}</Link>,
          key: "/about-us/x-alumni/",
        },
        {
          label: (
            <Link href="/about-us/student-recommend">
              {t("ReferralProgram")}
            </Link>
          ),
          key: "/about-us/student-recommend/",
        },
      ],
    },
    {
      label: <Link href="/">{t("Evaluation")}</Link>,
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
