import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import { userFilledInfo } from "./define";

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

export class SendEmailClient extends BaseAxiosClient {
  async sendOpenClassEmail(
    req: openClassEmailRequest
  ): Promise<openClassEmailResponse> {
    const data: openClassEmailResponse = await this.post(
      "/openClassEmail",
      req,
      this.jsonHeaders
    );
    return data;
  }
}

export const useSendEmailClient = () =>
  useClient("sendEmail", SendEmailClient, "/v1");
