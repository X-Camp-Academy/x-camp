import { GetCourses } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import React from "react";

const CourseClassesContext = React.createContext<StrapiResponseDataItem<GetCourses> | undefined>(undefined);

export default CourseClassesContext;
