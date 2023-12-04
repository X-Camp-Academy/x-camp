import { apiConfig } from '@/config/index';
import { BaseAxiosClient, useClient } from '../BaseAxiosClient';
import {
  GetAboutUsAchievementsAwardRequest,
  GetAboutUsAchievementsAwardResponse,
  GetAchievementsTimeLineRequest,
  GetAchievementsTimeLineResponse,
  GetAlumniMapRequest,
  GetAlumniMapResponse,
  GetCommunityRequest,
  GetCommunityResponse,
  GetCoursesRequest,
  GetCoursesResponse,
  GetFacultyRequest,
  GetFacultyResponse,
  GetFaqRequest,
  GetFaqResponse,
  GetJoinUsRequest,
  GetJoinUsResponse,
  GetNewEventRequest,
  GetNewEventResponse,
  GetPartnerRequest,
  GetPartnerResponse,
  GetProjectDemosRequest,
  GetProjectDemosResponse,
  GetReviewsRequest,
  GetReviewsResponse,
  GetStudentProjectsRequest,
  GetStudentProjectsResponse,
  GetUSACOLiveSolutionRequest,
  GetUSACOLiveSolutionResponse,
  GetUSACORequest,
  GetUSACOResponse,
  GetUserSearchRequest,
  GetUserSearchResponse,
  SubmitQuestionRequest,
  SubmitQuestionResponse
} from './define';

const { strapiServer } = apiConfig;

export const getParamsStringify: (params: any) => string = (params) => {
  const keyStack: string[] = [];
  let paramStrArr: any[] = [];
  const deep: (params: any) => string[] = (params) => {
    let strArr: string[] = [];
    if (params instanceof Object) {
      for (const key in params) {
        keyStack.push(key);
        strArr = [...strArr, ...deep(params[key])];
        keyStack.pop();
      }
    } else {
      let str = '';
      str = keyStack.map((item) => `[${item}]`).join('') + '=' + params;
      strArr.push(str);
    }

    return strArr;
  };
  for (const key in params) {
    const strArr = deep(params[key]);
    paramStrArr = [...paramStrArr, ...strArr.map((item) => key + item)];
  }
  return paramStrArr.length > 0 ? '?' + paramStrArr.join('&') : '';
};

export class StrapiClient extends BaseAxiosClient {
  async getFaculty(params: GetFacultyRequest): Promise<GetFacultyResponse> {
    const res: GetFacultyResponse = await this.get('/xc-faculties' + getParamsStringify(params), {});
    return res;
  }

  async getNewEvent(params: GetNewEventRequest): Promise<GetNewEventResponse> {
    const res: GetNewEventResponse = await this.get('/xc-new-events' + getParamsStringify(params), {});
    return res;
  }

  async getStudentProjects(params: GetStudentProjectsRequest): Promise<GetStudentProjectsResponse> {
    const res: GetStudentProjectsResponse = await this.get('/xc-student-projects' + getParamsStringify(params), {});
    return res;
  }

  async getAboutUsAchievementsAward(params: GetAboutUsAchievementsAwardRequest): Promise<GetAboutUsAchievementsAwardResponse> {
    const res = await this.get('/xc-about-us-achievements-awards' + getParamsStringify(params), {});
    return res;
  }

  async getCommunity(params: GetCommunityRequest): Promise<GetCommunityResponse> {
    const res: GetCommunityResponse = await this.get('/xc-communities' + getParamsStringify(params), {});
    return res;
  }

  async getCourses(params: GetCoursesRequest): Promise<GetCoursesResponse> {
    const res: GetCoursesResponse = await this.get('/xc-courses' + getParamsStringify(params), {});
    return res;
  }

  async getJoinUs(params: GetJoinUsRequest): Promise<GetJoinUsResponse> {
    const res: GetJoinUsResponse = await this.get('/xc-join-uses' + getParamsStringify(params), {});
    return res;
  }

  async getReviews(params: GetReviewsRequest): Promise<GetReviewsResponse> {
    const res = await this.get('/xc-reviews' + getParamsStringify(params), {});
    return res;
  }

  async getAlumniMap(params: GetAlumniMapRequest): Promise<GetAlumniMapResponse> {
    const res = await this.get('/xc-alumni-map' + getParamsStringify(params), {});
    return res;
  }

  async getProjectDemos(params: GetProjectDemosRequest): Promise<GetProjectDemosResponse> {
    const res = await this.get('/xc-about-us-achievements-projects-demos' + getParamsStringify(params), {});
    return res;
  }

  async getAchievementsTimeLine(params: GetAchievementsTimeLineRequest): Promise<GetAchievementsTimeLineResponse> {
    const res = await this.get('/xc-about-us-achievements-time-lines' + getParamsStringify(params), {});
    return res;
  }

  async getUSACOLiveSolution(params: GetUSACOLiveSolutionRequest): Promise<GetUSACOLiveSolutionResponse> {
    const res = await this.get('/xc-usaco-live-solutions' + getParamsStringify(params), {});
    return res;
  }

  async getFaq(params: GetFaqRequest): Promise<GetFaqResponse> {
    const res = await this.get('/xc-faqs' + getParamsStringify(params), {});
    return res;
  }

  async getPartner(params: GetPartnerRequest): Promise<GetPartnerResponse> {
    const res = await this.get('/xc-partners' + getParamsStringify(params), {});
    return res;
  }

  async getUserSearchMap(params: GetUserSearchRequest): Promise<GetUserSearchResponse> {
    const res = await this.get('/xc-user-search' + getParamsStringify(params), {});
    return res;
  }

  async getUSACO(params: GetUSACORequest): Promise<GetUSACOResponse> {
    const res = await this.get('/xc-usacos' + getParamsStringify(params), {});
    return res;
  }

  async submitQuestion(params: SubmitQuestionRequest): Promise<SubmitQuestionResponse> {
    const res = await this.post('/xc-feed-backs', params, this.jsonHeaders);
    return res;
  }
}

export const useStrapiClient = () => useClient('strapi', StrapiClient, '/api', { withCredentials: false }, strapiServer);
