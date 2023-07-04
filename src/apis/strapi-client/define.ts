import { Descriptions } from "antd";
import {
  StrapiRequest,
  StrapiResponse,
  strapiPublicFields,
} from "./strapiDefine";

export interface GetFacultyRequest {}

export interface GetFacultyResponse {
  data: {
    titleZh: string;
    titleEn: string;
    descriptionZh: string;
    descriptionEn: string;
    img: string;
    order: number;
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

export type GetTestimonyRequest = StrapiRequest<GetTestimony>;
export type GetTestimonyResponse = StrapiResponse<GetTestimony>;
