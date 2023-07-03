import {
  StrapiImg,
  StrapiRequest,
  StrapiResponse,
  strapiPublicFields,
} from "./strapiDefine";

export interface GetFacultyRequest {}

export interface GetFacultyResponse {
  data: {
    attributes: {
      titleZh: string;
      titleEn: string;
      descriptionZh: string;
      descriptionEn: string;
      img: StrapiImg;
      order: number;
    };
    id: number;
  }[];
}
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
