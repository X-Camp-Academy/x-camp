'use client';
import { ClassMode, CourseQuarter, LevelType } from '@/apis/strapi-client/define';
import { CourseType } from './define';
import { useLang } from '@/hoc/with-intl/define';

export type defaultValueProps = 'courseType' | 'classMode' | 'levelType' | 'courseQuarter';

export interface CourseOptionsProps<T> {
  label: T | string;
  value: T;
}

export const useCourseOptions = (defaultValue: defaultValueProps) => {
  const { format: t } = useLang();
  const courseTypeOptions: CourseOptionsProps<CourseType>[] = Object.values(CourseType)?.map((item) => {
    return {
      label: t(item),
      value: item
    };
  });

  const classModeOptions: CourseOptionsProps<ClassMode>[] = Object.values(ClassMode)?.map((item) => {
    return {
      label: t(item),
      value: item
    };
  });

  const levelTypeOptions: CourseOptionsProps<LevelType>[] = Object.values(LevelType)?.map((item) => {
    return {
      label: t(item),
      value: item
    };
  });

  const courseQuarterOptions: CourseOptionsProps<CourseQuarter>[] = Object.values(CourseQuarter)?.map((item) => {
    return {
      label: t(item),
      value: item
    };
  });

  const optionsMap = {
    courseType: courseTypeOptions,
    classMode: classModeOptions,
    levelType: levelTypeOptions,
    courseQuarter: courseQuarterOptions
  };

  return optionsMap[defaultValue];
};
