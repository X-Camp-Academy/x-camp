import {
  StrapiImg,
  StrapiRequest,
  StrapiResponse,
  strapiPublicFields,
} from "./strapiDefine";


export interface GetFaculty extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  img: StrapiImg;
  order: number;
}
export type GetFacultyRequest = StrapiRequest<GetFaculty>;
export type GetFacultyResponse = StrapiResponse<GetFaculty>;


export interface GetHomeStudentProjects extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  video: StrapiImg;
  order: number;
}
export type GetHomeStudentProjectsRequest = StrapiRequest<GetHomeStudentProjects>;
export type GetHomeStudentProjectsResponse = StrapiResponse<GetHomeStudentProjects>;


export interface GetAboutUsAchievementsAward extends strapiPublicFields {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  avatar: string;
  order: number;
}
export type GetAboutUsAchievementsAwardRequest =
  StrapiRequest<GetAboutUsAchievementsAward>;
export type GetAboutUsAchievementsAwardResponse =
  StrapiResponse<GetAboutUsAchievementsAward>;
