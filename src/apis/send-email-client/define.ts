export interface openClassEmailRequest {
  name: string;
  email: string;
  grade: string;
  phone: string;
  subscribe: boolean;
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
