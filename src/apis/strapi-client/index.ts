import { apiConfig } from "@/config/indx";
import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import {
  GetAboutUsAchievementsAwardRequest,
  GetAboutUsAchievementsAwardResponse,
  GetAboutUsJoinUsRequest,
  GetAboutUsJoinUsResponse,
  GetFacultyRequest,
  GetFacultyResponse,
  GetResourcesContestRequest,
  GetResourcesContestResponse,
  GetXAlumniRequest,
  GetXAlumniResponse,
  GetTestimonyRequest,
  GetTestimonyResponse,
  GetProjectsDemoRequest,
  GetProjectsDemoResponse,
  GetAchievementsTimeLineRequest,
  GetAchievementsTimeLineResponse,
} from "./define";

const { strapiServer } = apiConfig;

/**
 * @description 将params转换为strapi filter识别的类型
 * @param {Object} params : 参数对象
 * @example  {
        populate: '*',
        filters: {
          $or: [
            {
              date: {
                $eq: '2020-01-01',
              },
            },
            {
              date: {
                $eq: '2020-01-02',
              },
            },
          ],
        },
      },
    ],
  }   to   ?populate=*&filters[$or][0][date][$eq]=2020-01-01&filters[$or][1][date][$eq]=2020-01-02
 */
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
      let str = "";
      str = keyStack.map((item) => `[${item}]`).join("") + "=" + params;
      strArr.push(str);
    }

    return strArr;
  };
  for (const key in params) {
    const strArr = deep(params[key]);
    paramStrArr = [...paramStrArr, ...strArr.map((item) => key + item)];
  }
  return paramStrArr.length > 0 ? "?" + paramStrArr.join("&") : "";
};

export class StrapiClient extends BaseAxiosClient {
  async getFaculty(params: GetFacultyRequest): Promise<GetFacultyResponse> {
    const res: GetFacultyResponse = await this.get(
      "/xc-faculties" + getParamsStringify(params),
      {}
    );
    return res;
  }

  async getAboutUsAchievementsAward(
    params: GetAboutUsAchievementsAwardRequest
  ): Promise<GetAboutUsAchievementsAwardResponse> {
    const res = await this.get(
      "/xc-about-us-achievements-awards" + getParamsStringify(params),
      {}
    );
    return res;
  }

  async getXAlumni(params: GetXAlumniRequest): Promise<GetXAlumniResponse> {
    const res: GetXAlumniResponse = await this.get(
      "/xc-x-alumnis" + getParamsStringify(params),
      {}
    );
    return res;
  }

  async getResourcesContest(
    params: GetResourcesContestRequest
  ): Promise<GetResourcesContestResponse> {
    const res: GetResourcesContestResponse = await this.get(
      "/xc-resources-contests" + getParamsStringify(params),
      {}
    );
    return res;
  }

  async getAboutUsJoinUs(
    params: GetAboutUsJoinUsRequest
  ): Promise<GetAboutUsJoinUsResponse> {
    const res: GetAboutUsJoinUsResponse = await this.get(
      "/xc-about-us-join-uses" + getParamsStringify(params),
      {}
    );
    return res;
  }

  async getTestimony(
    params: GetTestimonyRequest
  ): Promise<GetTestimonyResponse> {
    const res = await this.get(
      "/xc-testimonies" + getParamsStringify(params),
      {}
    );
    return res;
  }

  async getProjectsDemo(
    params: GetProjectsDemoRequest
  ): Promise<GetProjectsDemoResponse> {
    const res = await this.get(
      "/xc-about-us-achievements-projects-demos" + getParamsStringify(params),
      {}
    );
    return res;
  }

  async getAchievementsTimeLine(
    params: GetAchievementsTimeLineRequest
  ): Promise<GetAchievementsTimeLineResponse> {
    const res = await this.get(
      "/xc-about-us-achievements-time-lines" + getParamsStringify(params),
      {}
    );
    return res;
  }
}

export const useStrapiClient = () =>
  useClient(
    "strapi",
    StrapiClient,
    "/api",
    { withCredentials: false },
    strapiServer
  );
