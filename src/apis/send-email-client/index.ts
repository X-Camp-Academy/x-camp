import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import {
  openClassEmailRequest,
  openClassEmailResponse,
  submitEvaluationRequest,
  submitEvaluationResponse,
  submitResumeResponse,
  subscribeNewsletterRequest,
  subscribeNewsletterResponse,
} from "./define";

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

  async subscribeNewsletter(
    req: subscribeNewsletterRequest
  ): Promise<subscribeNewsletterResponse> {
    const data: openClassEmailResponse = await this.post(
      "/subscribeNewsletter",
      req,
      this.jsonHeaders
    );
    return data;
  }

  async submitResume(req: FormData): Promise<submitResumeResponse> {
    const data = await this.post("/submitResume", req, this.dataHeaders);
    return data;
  }

  async submitEvaluation(
    req: submitEvaluationRequest
  ): Promise<submitEvaluationResponse> {
    const data = await this.post("/evaluation", req, this.jsonHeaders);
    return data;
  }
}

export const useSendEmailClient = () =>
  useClient("sendEmail", SendEmailClient, "/v1");
