export interface BaseResponse {
  code: number;
  msg: string;
  meta?: {
    pagination?: {
      page?: number;
      pageCount?: number;
      pageSize?: number;
      total?: number;
    };
  };
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

export interface GetXAlumniRequest {}

export interface GetXAlumniResponse extends BaseResponse {
  data: {
    titleZh: string;
    titleEn: string;
    descriptionZh: string;
    descriptionEn: string;
    img: string;
    order: number;
  }[];
}
