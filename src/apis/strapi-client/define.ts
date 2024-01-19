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
  order: number;
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

export interface GetSchoolCalendar extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  startDate: string;
}
export type GetSchoolCalendarRequest = StrapiRequest<GetSchoolCalendar>;
export type GetSchoolCalendarResponse = StrapiResponse<GetSchoolCalendar>;

export interface GetContests extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  contestLogo: StrapiMedia;
  startDateTime: string;
  endDateTime: string;
  contestLink: string;
  isContestEvent: boolean;
  order: number;
}
export type GetContestsRequest = StrapiRequest<GetContests>;
export type GetContestsResponse = StrapiResponse<GetContests>;

export interface GetXAlumniStory extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  img: StrapiMedia;
  order: number;
}
export type GetXAlumniStoryRequest = StrapiRequest<GetXAlumniStory>;
export type GetXAlumniStoryResponse = StrapiResponse<GetXAlumniStory>;

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

export interface GetUSACOSpotlight extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  avatar: StrapiMedia;
  order: number;
}
export type GetUSACOSpotlightRequest = StrapiRequest<GetUSACOSpotlight>;
export type GetUSACOSpotlightResponse = StrapiResponse<GetUSACOSpotlight>;

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

export enum LevelType {
  PythonForBeginners = 'Python for Beginners',
  USACOBronzeKnowledge = 'USACO Bronze Knowledge',
  USACOSilverKnowledge = 'USACO Silver Knowledge',
  USACOGoldKnowledge = 'USACO Gold Knowledge',
  USACOGrandmasterClasses = 'USACO Grandmaster Classes',
  MockTestClasses = 'Mock Test Classes',
  JavaAPCSClasses = 'Java & APCS Classes',
  FreeUSACOPublicMockTest = 'Free USACO Public Mock Test'
}

export enum SchoolQuarter {
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
  schoolQuarter: SchoolQuarter;
  registerLink: string;
  startDateTime: string;
  endDateTime: string;
  courseFormat: string;
  additionalInfo: string;
  isBilingual: boolean;
  levelType: LevelType;
  reviews: {
    data: StrapiResponseDataItem<GetReviews>[];
  };
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

export enum JoinUsCategory {
  PartTime = 'Part Time',
  FullTime = 'Full Time',
  XTutor = 'X-Tutor'
}

export enum JoinUsPlace {
  Remote = 'Remote',
  OnSite = 'On Site'
}

export interface GetJoinUs extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  category: JoinUsCategory;
  place: JoinUsPlace;
  contentZh: string;
  contentEn: string;
  order: number;
}
interface XAlumniMapProps {
  data: {
    name: string;
    value: string;
  }[];
}

export type GetJoinUsRequest = StrapiRequest<GetJoinUs>;
export type GetJoinUsResponse = StrapiResponse<GetJoinUs>;

export type GetReviewsRequest = StrapiRequest<GetReviews>;
export type GetReviewsResponse = StrapiResponse<GetReviews>;

export interface GetXAlumniMap extends strapiPublicFields {
  world: XAlumniMapProps;
}

export type GetXAlumniMapRequest = StrapiRequest<GetXAlumniMap>;
export type GetXAlumniMapResponse = StrapiResponseSingleDataItem<GetXAlumniMap>;
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

export interface GetTimeLine extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  order: number;
}

export type GetTimeLineRequest = StrapiRequest<GetTimeLine>;
export type GetTimeLineResponse = StrapiResponse<GetTimeLine>;

export enum USACOMedalVideoCategory {
  XCampUSACOBronze = 'X-Camp USACO Bronze',
  XCampUSACOSilver = 'X-Camp USACO Silver',
  XCampUSACOGold = 'X-Camp USACO Gold'
}

export interface GetUSACOMedalVideo extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  date: string;
  category: USACOMedalVideoCategory;
  video: StrapiMedia;
  order: number;
  videoZh: string;
  videoEn: string;
}

export type GetUSACOMedalVideoRequest = StrapiRequest<GetUSACOMedalVideo>;
export type GetUSACOMedalVideoResponse = StrapiResponse<GetUSACOMedalVideo>;

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

export interface GetUSACOAMA extends strapiPublicFields {
  title: string;
  img: StrapiMedia;
  date: string;
  link: string;
  order: number;
}

export type GetUSACOAMARequest = StrapiRequest<GetUSACOAMA>;
export type GetUSACOAMAResponse = StrapiResponse<GetUSACOAMA>;

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

export interface GetHomeButtons extends strapiPublicFields {
  showFreeConsultation: boolean;
  showFreeConsultationMobile: boolean;
  showWeeklyOpenHouse: boolean;
  showWeeklyOpenHouseMobile: boolean;
}
export type GetHomeButtonsResponse = StrapiResponseSingleDataItem<GetHomeButtons>;

export type SubmitQuestionResponse = StrapiResponseSingleDataItem<SubmitQuestion>;
