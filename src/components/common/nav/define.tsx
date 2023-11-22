import { apiConfig } from '@/config';
import { useLang } from '@/hoc/with-intl/define';
import { CalendarOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { XStarMenuItemType } from './x-star-menu';

const { assessment } = apiConfig;

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
      key: 'courses',
      dropdown: {
        left: {
          title: t('Courses'),
          description: t('Courses.LeftDescription'),
          showBtn: false
        }
        // right: {
        //   title: t('CourseCatalog'),
        //   description: t('Courses.RightDescription'),
        //   action: () => router.push('/courses/catalog'),
        //   key: '/courses'
        // }
      },
      children: [
        {
          label: <a href="/courses/catalog">{t('AllCourses')}</a>,
          key: 'catalog'
        },
        {
          label: <a href="/courses#weekly">{t('WeeklyClasses')}</a>,
          key: 'courses#weekly'
        },
        // {
        //   label: (
        //     <Link href="/courses/100-probs-challenge">100 Prob Challenge</Link>
        //   ),
        //   key: "/courses/100-prob-challenge",
        // },
        {
          label: <a href="/courses#camps">{t('In-personCamps')}</a>,
          key: 'courses#camps'
        },
        {
          label: <a href="/courses#mock-test-classes">{t('MockTestClasses')}</a>,
          key: 'courses#mock-test-classes'
        },
        {
          label: <a href="/courses#apcs">{t('Java/APCS.Classes')}</a>,
          key: 'courses#apcs'
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
          key: 'education-forum'
        },
        {
          label: <a href="/resources/usaco">USACO</a>,
          key: 'usaco'
        },
        {
          label: <Link href="/resources/usaco-live-solutions">{t('USACOLiveSolution')}</Link>,
          key: 'usaco-live-solution'
        },
        {
          label: <Link href="/resources/contests">{t('Contests')}</Link>,
          key: 'contests'
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
          key: 'introduction'
        },
        {
          label: <Link href="/about-us/achievements">{t('Achievements')}</Link>,
          key: 'achievements'
        },
        {
          label: (
            <a href="/about-us/introduction#faculty">
              {t('Faculty')} & {t('Coaches')}
            </a>
          ),
          key: 'introduction#faculty'
        },
        {
          label: <Link href="/about-us/join-us">{t('JoinUs')}</Link>,
          key: 'join-us'
        },
        {
          label: <Link href="/about-us/news">{t('News')}</Link>,
          key: 'news'
        },
        {
          label: <Link href="/about-us/partners">{t('Partners')}</Link>,
          key: 'partners'
        },
        {
          label: <Link href="/about-us/contact-us">{t('ContactUs')}</Link>,
          key: 'contact-us'
        }
        // {
        //   label: <Link href="/about-us/x-alumni">{t('XAlumni')}</Link>,
        //   key: '/about-us/x-alumni/'
        // }
      ]
    },
    {
      label: (
        <a href={assessment} target="_blank" rel="noreferrer">
          {t('WhatWeProvide')}
        </a>
      ),
      key: 'assessment'
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
