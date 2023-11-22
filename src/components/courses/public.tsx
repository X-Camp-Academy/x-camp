'use client';
import { ClassMode, CourseQuarter } from '@/apis/strapi-client/define';
import { useGetCourseLevelType } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';

export const useCourseOptions = (defaultValue: 'mode' | 'quarter' | 'levelType') => {
  const { format: t } = useLang();
  const { data } = useGetCourseLevelType();
  console.log('refresh............');

  const classModeOptions = Object.values(ClassMode)?.map((item) => {
    return {
      label: item,
      value: item
    };
  });

  const courseQuarterOptions = Object.values(CourseQuarter)?.map((item) => {
    return {
      label: t(item),
      value: item
    };
  });

  const courseLevelTypeOptions = data?.map((item) => {
    const { type } = item?.attributes;
    return {
      label: type,
      value: type
    };
  });

  const optionsMap = {
    mode: classModeOptions,
    quarter: courseQuarterOptions,
    levelType: courseLevelTypeOptions
  };

  return optionsMap[defaultValue];
};
