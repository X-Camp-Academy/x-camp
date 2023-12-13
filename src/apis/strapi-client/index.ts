import { apiConfig } from '@/config/index';
import { BaseAxiosClient, useClient } from '../BaseAxiosClient';
import {
  GetCommunityRequest,
  GetCommunityResponse,
  GetContestsRequest,
  GetContestsResponse,
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
  GetSchoolCalendarRequest,
  GetSchoolCalendarResponse,
  GetStudentProjectsRequest,
  GetStudentProjectsResponse,
  GetTimeLineRequest,
  GetTimeLineResponse,
  GetUSACOAMARequest,
  GetUSACOAMAResponse,
  GetUSACOMedalVideoRequest,
  GetUSACOMedalVideoResponse,
  GetUSACOSpotlightRequest,
  GetUSACOSpotlightResponse,
  GetUserSearchRequest,
  GetUserSearchResponse,
  GetXAlumniMapRequest,
  GetXAlumniMapResponse,
  GetXAlumniStoryRequest,
  GetXAlumniStoryResponse,
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

  async getSchoolCalendar(params: GetSchoolCalendarRequest): Promise<GetSchoolCalendarResponse> {
    const res: GetSchoolCalendarResponse = await this.get('/xc-school-calendars' + getParamsStringify(params), {});
    return res;
  }

  async getContests(params: GetContestsRequest): Promise<GetContestsResponse> {
    const res: GetContestsResponse = await this.get('/xc-contests' + getParamsStringify(params), {});
    return res;
  }

  async getXAlumniStory(params: GetXAlumniStoryRequest): Promise<GetXAlumniStoryResponse> {
    const res: GetXAlumniStoryResponse = await this.get('/xc-x-alumni-stories' + getParamsStringify(params), {});
    return res;
  }

  async getStudentProjects(params: GetStudentProjectsRequest): Promise<GetStudentProjectsResponse> {
    const res: GetStudentProjectsResponse = await this.get('/xc-student-projects' + getParamsStringify(params), {});
    return res;
  }

  async getUSACOSpotlight(params: GetUSACOSpotlightRequest): Promise<GetUSACOSpotlightResponse> {
    const res = await this.get('/xc-usaco-spotlights' + getParamsStringify(params), {});
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

  async getXAlumniMap(params: GetXAlumniMapRequest): Promise<GetXAlumniMapResponse> {
    const res = await this.get('/xc-x-alumni-map' + getParamsStringify(params), {});
    return res;
  }

  async getProjectDemos(params: GetProjectDemosRequest): Promise<GetProjectDemosResponse> {
    const res = await this.get('/xc-project-demos' + getParamsStringify(params), {});
    return res;
  }

  async getTimeLine(params: GetTimeLineRequest): Promise<GetTimeLineResponse> {
    const res = await this.get('/xc-time-lines' + getParamsStringify(params), {});
    return res;
  }

  async getUSACOMedalVideo(params: GetUSACOMedalVideoRequest): Promise<GetUSACOMedalVideoResponse> {
    const res = await this.get('/xc-usaco-medal-videos' + getParamsStringify(params), {});
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

  async getUSACOAMA(params: GetUSACOAMARequest): Promise<GetUSACOAMAResponse> {
    const res = await this.get('/xc-usaco-amas' + getParamsStringify(params), {});
    return res;
  }

  async submitQuestion(params: SubmitQuestionRequest): Promise<SubmitQuestionResponse> {
    const res = await this.post('/xc-submit-questions', params, this.jsonHeaders);
    return res;
  }
}

export const useStrapiClient = () => useClient('strapi', StrapiClient, '/api', { withCredentials: false }, strapiServer);
