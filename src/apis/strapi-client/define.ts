export interface BaseResponse {
  code: number;
  msg: string;
}

export interface GetFacultyRequest {}

export interface GetFacultyResponse extends BaseResponse {
  data: {};
}
