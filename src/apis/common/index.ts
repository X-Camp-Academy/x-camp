import { BaseAxiosClient, useClient } from '../BaseAxiosClient';
import {
  estimatingScoresRequest,
  estimatingScoresResponse,
  openClassEmailRequest,
  openClassEmailResponse,
  submitResumeResponse,
  subscribeNewsletterRequest,
  subscribeNewsletterResponse
} from './define';

export class CommonClient extends BaseAxiosClient {
  async sendOpenClassEmail(req: openClassEmailRequest): Promise<openClassEmailResponse> {
    const data: openClassEmailResponse = await this.post('/openClassEmail', req, this.jsonHeaders);
    return data;
  }

  async subscribeNewsletter(req: subscribeNewsletterRequest): Promise<subscribeNewsletterResponse> {
    const data: openClassEmailResponse = await this.post('/subscribeNewsletter', req, this.jsonHeaders);
    return data;
  }

  async submitResume(req: FormData): Promise<submitResumeResponse> {
    const data = await this.post('/submitResume', req, this.dataHeaders);
    return data;
  }

  async estimatingScores(req: estimatingScoresRequest): Promise<estimatingScoresResponse> {
    const data = await this.post('/estimatingScores', req, this.jsonHeaders);
    return data;
  }
}

export const useCommonClient = () => useClient('common', CommonClient, '/v1');
