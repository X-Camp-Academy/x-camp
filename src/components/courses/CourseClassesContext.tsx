import React from 'react';
import { GetCourses } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';

const CourseClassesContext = React.createContext<StrapiResponseDataItem<GetCourses> | undefined>(undefined);

export default CourseClassesContext;
