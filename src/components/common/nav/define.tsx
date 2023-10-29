import { useLang } from '@/hoc/with-intl/define';
import { CalendarOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { XStarMenuItemType } from './x-star-menu';

export const useMenuItems = () => {
  const router = useRouter();
  const { format: t } = useLang();

  const menuItems: XStarMenuItemType[] = [
    {
      label: <Link href="/">{t('Home')}</Link>,
      key: '/'
    },
    {
      label: <Link href="/courses">{t('Courses')}</Link>,
      key: '/courses',
      dropdown: {
        left: {
          title: t('ClassRoadMap'),
          description: t('Courses.LeftDescription'),
          btn: (
            <>
              <span onClick={() => router.push('/courses')}>{t('Courses.Btn')}</span>
              <UserAddOutlined />
            </>
          ),
          key: '/courses'
        },
        right: {
          title: t('CourseCatalog'),
          description: t('Courses.RightDescription'),
          action: () => router.push('/courses/catalog'),
          key: '/courses'
        }
      },
      children: [
        {
          label: <a href="/courses#online">{t('OnlineClasses')}</a>,
          key: '/courses/#online'
        },
        {
          label: <a href="/courses/#classify3">{t('USACO.Grandmaster')}</a>,
          key: 'USACO Grandmaster'
        },
        // {
        //   label: (
        //     <Link href="/courses/100-probs-challenge">100 Prob Challenge</Link>
        //   ),
        //   key: "/courses/100-prob-challenge",
        // },
        {
          label: <a href="/courses#camps">{t('In-personCamps')}</a>,
          key: '/courses/#camps'
        },
        {
          label: <a href="/courses#mock-test-classes">{t('MockTestClasses')}</a>,
          key: 'Mock Test Classes'
        },
        {
          label: <a href="/courses#apcs">{t('Java/APCS.Classes')}</a>,
          key: 'Java/APCS Classes'
        },
        {
          label: <Link href="/courses/student-recommend">{t('ReferralProgram')}</Link>,
          key: '/courses/student-recommend/'
        },
        {
          label: <Link href="/courses/weekly-open-house">{t('OpenHouse')}</Link>,
          key: '/courses/weekly-open-house/'
        }
        // {
        //   label: (
        //     <a href="https://x-tutors.org/" target="_blank" rel="noreferrer">
        //       {t('X-Tutors')}
        //     </a>
        //   ),
        //   key: 'x-tutors'
        // }
      ]
    },
    {
      label: <Link href="/resources/education-forum">{t('Resources')}</Link>,
      key: 'resources',
      dropdown: {
        left: {
          title: t('Resources'),
          description: t('SchoolCalendar.Description'),
          btn: (
            <>
              <span
                onClick={() => {
                  router.push('/about-us/calendar');
                }}
              >
                {t('ViewCalendar')}
              </span>
              <CalendarOutlined />
            </>
          )
        }
      },
      children: [
        {
          label: <Link href="/resources/education-forum">{t('EducationForum')}</Link>,
          key: '/resources/education-forum/'
        },
        {
          label: <a href="/resources/usaco/">USACO</a>,
          key: '/resources/usaco/'
        },
        {
          label: <a href="/about-us/achievements#art-of-programming-results">{t('InternalContests')}</a>,
          key: '/resources/internal-contests/'
        },
        {
          label: <Link href="/resources/usaco-live-solutions">{t('USACOLiveSolution')}</Link>,
          key: '/resources/usaco-live-solution/'
        },
        {
          label: <Link href="/resources/contests">{t('ExternalContests')}</Link>,
          key: '/resources/contests/'
        }
      ]
    },
    {
      label: <Link href="/about-us/introduction">{t('AboutUs')}</Link>,
      key: 'about-us',
      dropdown: {
        left: {
          title: t('AboutUs'),
          description: t('AboutUs.Description'),
          showBtn: false
        }
      },
      children: [
        {
          label: <Link href="/about-us/introduction">{t('Introduction')}</Link>,
          key: '/about-us/introduction/'
        },
        {
          label: <Link href="/about-us/achievements">{t('Achievements')}</Link>,
          key: '/about-us/achievements/'
        },
        {
          label: (
            <Link href="/about-us/introduction#faculty">
              {t('Faculty')}&{t('Coach')}
            </Link>
          ),
          key: '/about-us/introduction#faculty'
        },
        {
          label: <Link href="/about-us/join-us">{t('JoinUs')}</Link>,
          key: '/about-us/join-us/'
        },
        {
          label: <Link href="/about-us/news">{t('News')}</Link>,
          key: '/about-us/news/'
        },
        {
          label: <Link href="/about-us/partners">{t('Partners')}</Link>,
          key: '/about-us/partners/'
        },
        // {
        //   label: <Link href="/about-us/calendar">{t("SchoolCalendar")}</Link>,
        //   key: "/about-us/calendar/",
        // },
        {
          label: <Link href="/about-us/contact-us">{t('ContactUs')}</Link>,
          key: '/about-us/contact-us/'
        }
        // {
        //   label: <Link href="/about-us/x-alumni">{t('XAlumni')}</Link>,
        //   key: '/about-us/x-alumni/'
        // }
      ]
    },
    {
      label: <Link href="/evaluation">{t('Evaluation')}</Link>,
      key: 'evaluation'
    }
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
