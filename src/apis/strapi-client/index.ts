import { apiConfig } from "@/config/indx";
import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import { LangType } from "@/utils/intl";
import {
  GetAboutUsAchievementsAwardRequest,
  GetAboutUsAchievementsAwardResponse,
  GetFacultyRequest,
  GetFacultyResponse,
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
}

export const useStrapiClient = () =>
  useClient(
    "strapi",
    StrapiClient,
    "/api",
    { withCredentials: false },
    strapiServer
  );
