export interface openClassEmailRequest {
  name: string;
  email: string;
  grade: string;
  phone: string; //手机或wechatID
}

export interface openClassEmailResponse {
  code: number;
  msg: string;
}

export interface subscribeNewsletterRequest {
  email: string;
}

export interface subscribeNewsletterResponse {
  code: number;
  msg: string;
}

export interface submitResumeResponse {
  code: number;
  msg: string;
}

export interface submitEvaluationRequest {
  stuName: string;
  email: string;
  phoneNumber: string;
  grade: string;
  codingBackground: string;
  codingLanguage: string;
  programmingExp: string;
  aboutXcamp: string;
}

export interface submitEvaluationResponse {
  code: number;
  msg: string;
}
