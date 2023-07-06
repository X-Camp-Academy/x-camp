import {
  StrapiMedia,
  StrapiMedias,
  StrapiRequest,
  StrapiResponse,
  StrapiResponseSingleDataItem,
  strapiPublicFields,
} from "./strapiDefine";

export interface GetFaculty extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  img: StrapiMedia;
  order: number;
}
export type GetFacultyRequest = StrapiRequest<GetFaculty>;
export type GetFacultyResponse = StrapiResponse<GetFaculty>;

export interface GetHomeStudentProjects extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  video: StrapiMedia;
  order: number;
}
export type GetHomeStudentProjectsRequest =
  StrapiRequest<GetHomeStudentProjects>;
export type GetHomeStudentProjectsResponse =
  StrapiResponse<GetHomeStudentProjects>;

export interface GetAboutUsAchievementsAward extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  avatar: StrapiMedia;
  order: number;
}

export interface GetTestimony extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  score: number;
  order: number;
  tags: JSON;
  descriptionZh: string;
  descriptionEn: string;
}

export type GetAboutUsAchievementsAwardRequest =
  StrapiRequest<GetAboutUsAchievementsAward>;
export type GetAboutUsAchievementsAwardResponse =
  StrapiResponse<GetAboutUsAchievementsAward>;

export interface GetCourseLevelType extends strapiPublicFields {
  type: string;
}
export type GetCourseLevelTypeRequest = StrapiRequest<GetCourseLevelType>;
export type GetCourseLevelTypeResponse = StrapiResponse<GetCourseLevelType>;

interface CourseLevelType {
  data: {
    id: number;
    attributes: {
      type: string;
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
    };
  };
}

export interface GetCourses extends strapiPublicFields {
  classMode: string;
  classLang: string;
  classRoomLang: string;
  courseCode: string;
  courseLevelType: CourseLevelType;
  courseLongDescriptionEn: string;
  courseLongDescriptionZh: string;
  courseShortDescriptionEn: string[];
  courseShortDescriptionZh: string[];
  courseTitleEn: string;
  courseTitleZh: string;
  createdAt: string;
  isCamp: string;
  lessonNum: number;
  media: StrapiMedias;
  order: number;
  publishedAt: string;
  recommendedClasses: Array<number>;
  recommendedLowerGrade: number;
  recommendedUpperGrade: number;
  tuitionRMB: number;
  tuitionUSD: number;
  updatedAt: string;
  frequency: string;
  schoolYear: string;
  schoolQuarter: string;
  registerLink: string;
  bundleRegisterLink: string;
}
export type GetCoursesRequest = StrapiRequest<GetCourses>;
export type GetCoursesResponse = StrapiResponse<GetCourses>;

export interface GetClasses extends strapiPublicFields {}

export type GetClassesRequest = StrapiRequest<GetClasses>;
export type GetClassesResponse = StrapiResponse<GetClasses>;

export interface GetXAlumni extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  img: StrapiMedias;
  order: number;
}

export type GetXAlumniRequest = StrapiRequest<GetXAlumni>;
export type GetXAlumniResponse = StrapiResponse<GetXAlumni>;

export interface GetResourcesContest extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  linkEn: string;
  linkZh: string;
  order: number;
  imgZh: StrapiMedia;
  imgEn: StrapiMedia;
}

export type GetResourcesContestRequest = StrapiRequest<GetResourcesContest>;
export type GetResourcesContestResponse = StrapiResponse<GetResourcesContest>;

export enum AboutUsJoinUsCategory {
  PartTime = "Part Time",
  FullTime = "Full Time",
  XTutor = "X-Tutor",
}

export enum AboutUsJoinUsPlace {
  Remote = "Remote",
  OnSite = "On Site",
}

export interface GetAboutUsJoinUs extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  video: StrapiMedia;
  order: number;
}

export interface GetAboutUsJoinUs extends strapiPublicFields {
  category: AboutUsJoinUsCategory;
  place: AboutUsJoinUsPlace;
  contentZh: string;
  contentEn: string;
  order: number;
}
interface MapProps {
  data: {
    name: string;
    value: string;
  }[];
}

export interface GetAboutUsAlumniMap extends strapiPublicFields {
  world: MapProps;
  usa: MapProps;
}

export type GetAboutUsJoinUsRequest = StrapiRequest<GetAboutUsJoinUs>;
export type GetAboutUsJoinUsResponse = StrapiResponse<GetAboutUsJoinUs>;
export type GetTestimonyRequest = StrapiRequest<GetTestimony>;
export type GetTestimonyResponse = StrapiResponse<GetTestimony>;

export type GetAboutUsAlumniMapRequest = StrapiRequest<GetAboutUsAlumniMap>;
export type GetAboutUsAlumniMapResponse =
  StrapiResponseSingleDataItem<GetAboutUsAlumniMap>;
