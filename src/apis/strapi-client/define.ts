export interface BaseResponse {
  code: number;
  msg: string;
}

export interface GetFacultyRequest {}

export interface GetFacultyResponse extends BaseResponse {
  data: {
    titleZh: string;
    titleEn: string;
    descriptionZh: string;
    descriptionEn: string;
    img: string;
    order: number;
  }[];
}
