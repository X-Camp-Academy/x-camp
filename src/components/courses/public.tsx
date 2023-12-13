'use client';
import { ClassMode, LevelType, SchoolQuarter } from '@/apis/strapi-client/define';
import { useLang } from '@/hoc/with-intl/define';
import { CourseType } from './define';

export type defaultValueProps = 'courseType' | 'classMode' | 'levelType' | 'schoolQuarter';

export interface CourseOptionsProps<T> {
  label: T | string;
  value: T;
}

export const useCourseOptions = (defaultValue: defaultValueProps) => {
  const { format: t } = useLang();

  const courseTypeOptions: CourseOptionsProps<CourseType>[] = Object.values(CourseType)?.map((item) => {
    return {
      label: item,
      value: item
    };
  });

  const classModeOptions: CourseOptionsProps<ClassMode>[] = Object.values(ClassMode)?.map((item) => {
    return {
      label: item,
      value: item
    };
  });

  const levelTypeOptions: CourseOptionsProps<LevelType>[] = Object.values(LevelType)?.map((item) => {
    return {
      label: item,
      value: item
    };
  });

  const schoolQuarterOptions: CourseOptionsProps<SchoolQuarter>[] = Object.values(SchoolQuarter)?.map((item) => {
    return {
      label: t(item),
      value: item
    };
  });

  const optionsMap = {
    courseType: courseTypeOptions,
    classMode: classModeOptions,
    levelType: levelTypeOptions,
    schoolQuarter: schoolQuarterOptions
  };

  return optionsMap[defaultValue];
};
