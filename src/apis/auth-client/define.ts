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

export interface AuthorizeRequest {
  response_type: string;
  state: string;
  redirect_uri: string;
  client_id: string;
  xmode?: 'notredirect';
}
export interface AuthorizeResponse {
  code: number;
  msg: string;
  data: string;
}
export interface LoginRequest {
  code: string;
  state: string;
  xmode?: 'notredirect';
}
