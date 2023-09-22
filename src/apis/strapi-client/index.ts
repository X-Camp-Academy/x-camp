import { apiConfig } from '@/config/index';
import { BaseAxiosClient, useClient } from '../BaseAxiosClient';
import {
  GetAboutUsAchievementsAwardRequest,
  GetAboutUsAchievementsAwardResponse,
  GetAboutUsAlumniMapRequest,
  GetAboutUsAlumniMapResponse,
  GetAboutUsIntroArticleRequest,
  GetAboutUsIntroArticleResponse,
  GetAboutUsJoinUsRequest,
  GetAboutUsJoinUsResponse,
  GetAchievementsTimeLineRequest,
  GetAchievementsTimeLineResponse,
  GetCommunityRequest,
  GetCommunityResponse,
  GetCourseLevelTypeRequest,
  GetCourseLevelTypeResponse,
  GetCoursesRequest,
  GetCoursesResponse,
  GetFacultyRequest,
  GetFacultyResponse,
  GetFaqRequest,
  GetFaqResponse,
  GetHomeStudentProjectsRequest,
  GetHomeStudentProjectsResponse,
  GetNewEventRequest,
  GetNewEventResponse,
  GetPartnerRequest,
  GetPartnerResponse,
  GetProjectsDemoRequest,
  GetProjectsDemoResponse,
  GetResourcesContestRequest,
  GetResourcesContestResponse,
  GetResourcesLiveSolutionRequest,
  GetResourcesLiveSolutionResponse,
  GetReviewsRequest,
  GetReviewsResponse,
  GetUserSearchRequest,
  GetUserSearchResponse,
  SubmitUserInfoRequest,
  SubmitUserInfoResponse
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

  async getHomeStudentProjects(params: GetHomeStudentProjectsRequest): Promise<GetHomeStudentProjectsResponse> {
    const res: GetHomeStudentProjectsResponse = await this.get('/xc-home-student-projects' + getParamsStringify(params), {});
    return res;
  }

  async getAboutUsAchievementsAward(params: GetAboutUsAchievementsAwardRequest): Promise<GetAboutUsAchievementsAwardResponse> {
    const res = await this.get('/xc-about-us-achievements-awards' + getParamsStringify(params), {});
    return res;
  }

  async getCourseLevelType(params: GetCourseLevelTypeRequest): Promise<GetCourseLevelTypeResponse> {
    const res: GetCourseLevelTypeResponse = await this.get('/xc-course-level-types' + getParamsStringify(params), {});
    return res;
  }

  async getCommunity(params: GetCommunityRequest): Promise<GetCommunityResponse> {
    const res: GetCommunityResponse = await this.get('/xc-x-alumnis' + getParamsStringify(params), {});
    return res;
  }

  async getCourses(params: GetCoursesRequest): Promise<GetCoursesResponse> {
    const res: GetCoursesResponse = await this.get('/xc-courses' + getParamsStringify(params), {});
    return res;
  }

  async getResourcesContest(params: GetResourcesContestRequest): Promise<GetResourcesContestResponse> {
    const res: GetResourcesContestResponse = await this.get('/xc-resources-contests' + getParamsStringify(params), {});
    return res;
  }

  async getAboutUsJoinUs(params: GetAboutUsJoinUsRequest): Promise<GetAboutUsJoinUsResponse> {
    const res: GetAboutUsJoinUsResponse = await this.get('/xc-about-us-join-uses' + getParamsStringify(params), {});
    return res;
  }

  async getReviews(params: GetReviewsRequest): Promise<GetReviewsResponse> {
    const res = await this.get('/xc-reviews' + getParamsStringify(params), {});
    return res;
  }

  async getAboutUsAlumniMap(params: GetAboutUsAlumniMapRequest): Promise<GetAboutUsAlumniMapResponse> {
    const res = await this.get('/xc-about-us-alumni-map' + getParamsStringify(params), {});
    return res;
  }

  async getAboutUsIntroArticle(params: GetAboutUsIntroArticleRequest): Promise<GetAboutUsIntroArticleResponse> {
    const res = await this.get('/xc-about-us-introduction-articles' + getParamsStringify(params), {});
    return res;
  }

  async getProjectsDemo(params: GetProjectsDemoRequest): Promise<GetProjectsDemoResponse> {
    const res = await this.get('/xc-about-us-achievements-projects-demos' + getParamsStringify(params), {});
    return res;
  }

  async getAchievementsTimeLine(params: GetAchievementsTimeLineRequest): Promise<GetAchievementsTimeLineResponse> {
    const res = await this.get('/xc-about-us-achievements-time-lines' + getParamsStringify(params), {});
    return res;
  }

  async getResourcesLiveSolution(params: GetResourcesLiveSolutionRequest): Promise<GetResourcesLiveSolutionResponse> {
    const res = await this.get('/xc-resources-live-solutions' + getParamsStringify(params), {});
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
  async submitQuestionForm(params: SubmitUserInfoRequest): Promise<SubmitUserInfoResponse> {
    const res = await this.post('/xc-feed-backs', params, this.jsonHeaders);
    return res;
  }
}

export const useStrapiClient = () => useClient('strapi', StrapiClient, '/api', { withCredentials: false }, strapiServer);
