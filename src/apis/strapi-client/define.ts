import {
  StrapiMedia,
  StrapiMedias,
  StrapiRequest,
  StrapiResponse,
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

export interface GetIntroductionFacultyCoach extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  avatar: StrapiMedia;
}
export type GetIntroductionFacultyCoachRequest =
  StrapiRequest<GetIntroductionFacultyCoach>;
export type GetIntroductionFacultyCoachResponse =
  StrapiResponse<GetIntroductionFacultyCoach>;

export enum NewEventCategory {
  News = "News",
  Event = "Event",
  Activity = "Activity",
}

export interface GetNewEvent extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  dateTime: string;
  tags: NewEventCategory;
  order: number;
  img: StrapiMedia;
}
export type GetNewEventRequest = StrapiRequest<GetNewEvent>;
export type GetNewEventResponse = StrapiResponse<GetNewEvent>;

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
  classLang: string;
  classRoomLang: string;
  courseCode: string;
  courseLevelType: CourseLevelType;
  courseLongDescriptionEn: string;
  courseLongDescriptionZh: string;
  courseShortDescriptionEn: string;
  courseShortDescriptionZh: string;
  courseTitleEn: string;
  courseTitleZh: string;
  createdAt: string;
  isCamp: string;
  lessonNum: string;
  media: StrapiMedias;
  order: number;
  publishedAt: string;
  recommendedClasses: Array<number>;
  recommendedLowerGrade: number;
  recommendedUpperGrade: number;
  tuitionRMB: number;
  tuitionUSD: number;
  updatedAt: string;
}
export type GetCoursesRequest = StrapiRequest<GetCourses>;
export type GetCoursesResponse = StrapiResponse<GetCourses>;

export interface GetCourseDetail extends strapiPublicFields {}
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
export type GetCourseDetailRequest = StrapiRequest<GetCourses>;
export type GetCourseDetailResponse = StrapiResponse<GetCourses>;

export interface GetAboutUsJoinUs extends strapiPublicFields {
  category: AboutUsJoinUsCategory;
  place: AboutUsJoinUsPlace;
  contentZh: string;
  contentEn: string;
  order: number;
}

export interface GetAboutUsAlumniMap extends strapiPublicFields {
  world: any;
  usa: any;
}

export type GetAboutUsJoinUsRequest = StrapiRequest<GetAboutUsJoinUs>;
export type GetAboutUsJoinUsResponse = StrapiResponse<GetAboutUsJoinUs>;
export type GetTestimonyRequest = StrapiRequest<GetTestimony>;
export type GetTestimonyResponse = StrapiResponse<GetTestimony>;

export type GetAboutUsAlumniMapRequest = StrapiRequest<GetAboutUsAlumniMap>;
export type GetAboutUsAlumniMapResponse = StrapiResponse<GetAboutUsAlumniMap>;
