export interface UserInfo {
  address: string;
  area: string;
  awards: string;
  birthday: string;
  city: string;
  email: string;
  gender: number;
  id: number;
  password: string;
  phone: string;
  postcode: string;
  province: string;
  real_name: string;
  resource: string[];
  school: string;
  signature: string;
  user_name: string;
  wechat_openid: string;
}

export interface GetUserInfoResponse {
  code: number;
  msg: string;
  data: UserInfo;
}

export interface LogoutResponse {
  code: number;
  msg: string;
  data: string;
}
