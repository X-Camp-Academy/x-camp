import { StrapiMedia, StrapiMedias, StrapiRequest, StrapiResponse, StrapiResponseDataItem, StrapiResponseSingleDataItem, strapiPublicFields } from './strapiDefine';

export enum FacultyLevelCategory {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Grandmaster = 'Grandmaster'
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
  News = 'News',
  Events = 'Events',
  SchoolCalendar = 'School Calendar',
  EventContest = 'Event Contest',
  XAlumni = 'X-Alumni',
  All = 'All'
}
export enum EventCategory {
  SchoolLifeSharing = "School life's sharing",
  CodingEducation = 'Coding Education',
  CareerPath = 'Career Path',
  Research = 'Research',
  All = 'All'
}
export enum EventLanguage {
  English = 'English',
  Chinese = 'Chinese'
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
  detailContentZh?: string;
  detailContentEn?: string;
  eventLanguage?: EventLanguage;
  isContestEvent?: Boolean;
}
export type GetNewEventRequest = StrapiRequest<GetNewEvent>;
export type GetNewEventResponse = StrapiResponse<GetNewEvent>;

export interface GetStudentProjects extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  video: StrapiMedia;
  order: number;
  videoZh: string;
  videoEn: string;
}
export type GetStudentProjectsRequest = StrapiRequest<GetStudentProjects>;
export type GetStudentProjectsResponse = StrapiResponse<GetStudentProjects>;

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

export type GetAboutUsAchievementsAwardRequest = StrapiRequest<GetAboutUsAchievementsAward>;
export type GetAboutUsAchievementsAwardResponse = StrapiResponse<GetAboutUsAchievementsAward>;

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
export enum ClassMode {
  OnlineLive = 'Online Live',
  InPerson = 'In-person'
}

export enum CourseQuarter {
  Spring = 'Spring',
  Summer = 'Summer',
  Fall = 'Fall',
  Winter = 'Winter'
}

export enum FrequencyCategory {
  Weekly = 'Weekly',
  Daily = 'Daily',
  Once = 'Once'
}

export interface GetCourses extends strapiPublicFields {
  classMode: ClassMode;
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
  frequency: FrequencyCategory;
  schoolYear: string;
  schoolQuarter: CourseQuarter;
  registerLink: string;
  startDateTime: string;
  endDateTime: string;
  courseFormat: string;
  additionalInfo: string;
  isBilingual: boolean;
}
export type GetCoursesRequest = StrapiRequest<GetCourses>;
export type GetCoursesResponse = StrapiResponse<GetCourses>;

export interface GetCommunity extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  img: StrapiMedia;
  order: number;
}

export type GetCommunityRequest = StrapiRequest<GetCommunity>;
export type GetCommunityResponse = StrapiResponse<GetCommunity>;

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
  PartTime = 'Part Time',
  FullTime = 'Full Time',
  XTutor = 'X-Tutor'
}

export enum AboutUsJoinUsPlace {
  Remote = 'Remote',
  OnSite = 'On Site'
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

export type GetAboutUsJoinUsRequest = StrapiRequest<GetAboutUsJoinUs>;
export type GetAboutUsJoinUsResponse = StrapiResponse<GetAboutUsJoinUs>;

export type GetReviewsRequest = StrapiRequest<GetReviews>;
export type GetReviewsResponse = StrapiResponse<GetReviews>;

export interface GetAlumniMap extends strapiPublicFields {
  world: MapProps;
}

export type GetAlumniMapRequest = StrapiRequest<GetAlumniMap>;
export type GetAlumniMapResponse = StrapiResponseSingleDataItem<GetAlumniMap>;
export interface GetProjectDemos extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  url: StrapiMedia;
  order: number;
}

export type GetProjectDemosRequest = StrapiRequest<GetProjectDemos>;
export type GetProjectDemosResponse = StrapiResponse<GetProjectDemos>;

export interface GetAchievementsTimeLine extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  order: number;
}

export type GetAchievementsTimeLineRequest = StrapiRequest<GetAchievementsTimeLine>;
export type GetAchievementsTimeLineResponse = StrapiResponse<GetAchievementsTimeLine>;

export enum USACOLiveSolutionCategory {
  XCampUSACOBronze = 'X-Camp USACO Bronze',
  XCampUSACOSilver = 'X-Camp USACO Silver',
  XCampUSACOGold = 'X-Camp USACO Gold'
}

export interface GetUSACOLiveSolution extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  date: string;
  category: USACOLiveSolutionCategory;
  video: StrapiMedia;
  order: number;
  videoZh: string;
  videoEn: string;
}

export type GetUSACOLiveSolutionRequest = StrapiRequest<GetUSACOLiveSolution>;
export type GetUSACOLiveSolutionResponse = StrapiResponse<GetUSACOLiveSolution>;

export enum FaqCategory {
  ReferralQA = 'Referral QA',
  CoursesQA = 'Courses QA',
  CampsQA = 'Camps QA'
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
  ChinaPartners = 'China Partners',
  CommunityPartners = 'Community Partners',
  UniversityPartners = 'University Partners',
  EducationPartners = 'Education Partners'
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

export interface GetUSACO extends strapiPublicFields {
  title: string;
  img: StrapiMedia;
  date: string;
  link: string;
  order: number;
}

export type GetUSACORequest = StrapiRequest<GetUSACO>;
export type GetUSACOResponse = StrapiResponse<GetUSACO>;

export interface SubmitQuestion extends strapiPublicFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
export type SubmitQuestionRequest = {
  data: SubmitQuestion;
};
export type SubmitQuestionResponse = StrapiResponseSingleDataItem<SubmitQuestion>;
