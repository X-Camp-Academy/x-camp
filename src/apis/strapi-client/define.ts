import {
  StrapiMedia,
  StrapiMedias,
  StrapiRequest,
  StrapiResponse,
  StrapiResponseDataItem,
  StrapiResponseSingleDataItem,
  strapiPublicFields,
} from "./strapiDefine";

export enum FacultyLevelCategory {
  BasicLevel = "Basic Level",
  USACOBronzeLevel = "USACO Bronze Level",
  USACOSilverLevel = "USACO Silver Level",
  GrandmasterClassLevel = "Grandmaster Class Level",
  All = "All",
}

export interface GetFaculty extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  img: StrapiMedia;
  order: number;
  courseId: string;
  pageName: string;
  eventId: string;
  level: FacultyLevelCategory;
}
export type GetFacultyRequest = StrapiRequest<GetFaculty>;
export type GetFacultyResponse = StrapiResponse<GetFaculty>;

export enum NewEventCategory {
  News = "News",
  Event = "Events",
  SchoolCalendar = "School Calendar",
  EventContest = "Event Contest",
  XAlumni = "X-Alumni",
  All = "All",
}

export enum EventCategory {
  SchoolLifeSharing = "School life's sharing",
  CodingEducation = "Coding Education",
  CareerPath = "Career Path",
  Research = "Research",
}

export interface GetNewEvent extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  tags: NewEventCategory;
  eventCategory?: EventCategory;
  order?: number;
  editor?: string;
  organizer?: string;
  geographicallyAddress?: string;
  onlinePlatform?: string;
  link?: string;
  startDateTime: string;
  endDateTime?: string;
  courseId?: number;
  pageName?: string;
  eventId?: number;
  contestLinkZh?: string;
  contestLinkEn?: string;
  contestImgZh?: StrapiMedia;
  contestImgEn?: StrapiMedia;
  contestLogo?: StrapiMedia;
  contestTitleExplanationZh?: string;
  contestTitleExplanationEn?: string;

  imgEn: StrapiMedia;
  imgZh: StrapiMedia;
  detailContent: string;
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
  videoZh: string;
  videoEn: string;
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

export interface GetReviews extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  score: number;
  order: number;
  descriptionZh: string;
  descriptionEn: string;
  courseId: string;
  pageName: string;
  eventId: string;
  datetime: string;
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

export interface GetClasses extends strapiPublicFields {
  classCode: string;
  startDateTime: string;
  endDateTime: string;
  isFull: boolean;
  timeSuffix: string;
  location: string;
  order: number;
}

export interface GetCourses extends strapiPublicFields {
  classMode: string;
  classLang: string;
  spokenLang: string;
  courseCode: string;
  classes: {
    data: StrapiResponseDataItem<GetClasses>[];
  };
  courseLevelType: StrapiResponseSingleDataItem<GetCourseLevelType>;
  courseLongDescriptionEn: string;
  courseLongDescriptionZh: string;
  courseShortDescriptionEn: string[];
  courseShortDescriptionZh: string[];
  courseSyllabusEn: string[];
  courseSyllabusZh: string[];
  courseTitleEn: string;
  courseTitleZh: string;
  isCamp: boolean;
  lessonNum: number;
  media: StrapiMedias;
  order: number;
  isRecommendedClasses: {
    data: StrapiResponseDataItem<GetCourses>[];
  };
  recommendedClasses: {
    data: StrapiResponseDataItem<GetCourses>[];
  };
  recommendedLowerGrade: number;
  recommendedUpperGrade: number;
  tuitionRMB: number;
  tuitionUSD: number;
  frequency: string;
  schoolYear: string;
  schoolQuarter: string;
  registerLink: string;
  isBundle: boolean;
  bundleRegisterLink: string;
  startDateTime: string;
  endDateTime: string;
  courseFormat: string;
  additionalInfo: string;
}
export type GetCoursesRequest = StrapiRequest<GetCourses>;
export type GetCoursesResponse = StrapiResponse<GetCourses>;

export interface GetXAlumni extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  img: StrapiMedia;
  order: number;
}

export type GetXAlumniRequest = StrapiRequest<GetXAlumni>;
export type GetXAlumniResponse = StrapiResponse<GetXAlumni>;

export interface GetResourcesContest extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  titleExplanationZh: string;
  titleExplanationEn: string;
  descriptionZh: string;
  descriptionEn: string;
  linkEn: string;
  linkZh: string;
  order: number;
  imgZh: StrapiMedia;
  imgEn: StrapiMedia;
  contestDate: string;
  logo: StrapiMedia;
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

export type GetReviewsRequest = StrapiRequest<GetReviews>;
export type GetReviewsResponse = StrapiResponse<GetReviews>;

export type GetAboutUsAlumniMapRequest = StrapiRequest<GetAboutUsAlumniMap>;
export type GetAboutUsAlumniMapResponse =
  StrapiResponseSingleDataItem<GetAboutUsAlumniMap>;
export interface GetProjectsDemo extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  url: StrapiMedia;
  order: number;
}

export type GetProjectsDemoRequest = StrapiRequest<GetProjectsDemo>;
export type GetProjectsDemoResponse = StrapiResponse<GetProjectsDemo>;

export interface GetAchievementsTimeLine extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  order: number;
}

export type GetAchievementsTimeLineRequest =
  StrapiRequest<GetAchievementsTimeLine>;
export type GetAchievementsTimeLineResponse =
  StrapiResponse<GetAchievementsTimeLine>;

export interface GetAboutUsIntroArticle extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  order: number;
  img1: StrapiMedia;
  img2: StrapiMedia;
  img3: StrapiMedia;
}
export type GetAboutUsIntroArticleRequest =
  StrapiRequest<GetAboutUsIntroArticle>;
export type GetAboutUsIntroArticleResponse =
  StrapiResponse<GetAboutUsIntroArticle>;

export interface GetResourcesLiveSolution extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  date: string;
  category: string;
  video: StrapiMedia;
  order: number;
  videoZh: string;
  videoEn: string;
}

export type GetResourcesLiveSolutionRequest =
  StrapiRequest<GetResourcesLiveSolution>;
export type GetResourcesLiveSolutionResponse =
  StrapiResponse<GetResourcesLiveSolution>;

export enum FaqCategory {
  ReferralQA = "Referral QA",
  CoursesQA = "Courses QA",
  CampsQA = "Camps QA",
}

export interface GetFaq extends strapiPublicFields {
  questionZh: string;
  questionEn: string;
  answerZh: string;
  answerEn: string;
  category: FaqCategory;
  order: number;
  courseId: string;
  pageName: string;
  eventId: string;
}

export type GetFaqRequest = StrapiRequest<GetFaq>;
export type GetFaqResponse = StrapiResponse<GetFaq>;

export enum PartnerCategory {
  ChinaPartners = "China Partners",
  UniversityPartners = "University Partners",
  CommunityPartners = "Community Partners",
  EducationPartners = "Education Partners",
}

export interface GetPartner extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  titleDescriptionZh: string;
  titleDescriptionEn: string;
  category: PartnerCategory;
  link: string;
  logo: StrapiMedia;
  order: number;
}

export type GetPartnerRequest = StrapiRequest<GetPartner>;
export type GetPartnerResponse = StrapiResponse<GetPartner>;

export interface UserSearch extends strapiPublicFields {
  keywords: JSON;
}
export type GetUserSearchRequest = StrapiRequest<UserSearch>;
export type GetUserSearchResponse = StrapiResponseSingleDataItem<UserSearch>;

export interface UserInfo extends strapiPublicFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
export type SubmitUserInfoRequest = {
  data: UserInfo;
};
export type SubmitUserInfoResponse = StrapiResponseSingleDataItem<UserInfo>;
