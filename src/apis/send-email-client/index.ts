import { File } from "buffer";
import { BaseAxiosClient, useClient } from "../BaseAxiosClient";

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

export interface submitEvaluationResponse {
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

	async submitEvaluation(req: FormData): Promise<submitEvaluationResponse> {
		const data = await this.post("/submitEvaluation", req, this.jsonHeaders);
		return data;
	}
}

export const useSendEmailClient = () =>
	useClient("sendEmail", SendEmailClient, "/v1");
