import { GetCourses } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import React from 'react';

type CourseClassesContextProps = (StrapiResponseDataItem<GetCourses> & { courseLevel: number; affix: boolean; setAffix: React.Dispatch<React.SetStateAction<boolean>> }) | undefined;

const CourseClassesContext = React.createContext<CourseClassesContextProps>(undefined);

export default CourseClassesContext;
