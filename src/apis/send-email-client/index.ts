import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import { userFilledInfo } from "./define";

export interface openClassEmailRequest {
  code: number;
  msg: string;
  data: userFilledInfo;
}

export interface openClassEmailResponse {
  code: number;
  msg: string;
}

export class SendEmailClient extends BaseAxiosClient {
  async sendOpenClassEmail(req: openClassEmailRequest) {
    const data: openClassEmailResponse = await this.post(
      "/openClassEmail",
      req,
      this.jsonHeaders
    );
    return data;
  }
}

export const useSenEmailCLient = () =>
  useClient("sendEmail", SendEmailClient, "/v1");
