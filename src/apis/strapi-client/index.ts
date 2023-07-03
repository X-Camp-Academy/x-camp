import { apiConfig } from "@/config/indx";
import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import { LangType } from "@/utils/intl";

const { strapiServer } = apiConfig;

/**
 * Strapi中的表名，本项目所涉及的表均以XC-开头
 */
type Target = `XC-Faculty`;

/**
 * @description 获取 请求中文内容或者英文内容的url地址
 * @param {LangType} lang  zh: 中文内容  en:英文内容
 * @param {Target}  target 请求的目标
 */
export const getStrapiUrl = (lang: LangType, target: Target, id?: number) => {
  const strapiMap = {
    "XC-Faculty": "/xc-faculties",
  };
  return strapiMap[target] + (id || id === 0 ? "/" + id : "");
};

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
  async getList(params: any, lang: LangType, target: Target, id?: number) {
    const res = this.get(
      getStrapiUrl(lang, target, id) + getParamsStringify(params),
      {}
    );
    return res;
  }
  async postList(params: any, lang: LangType, target: Target, id?: number) {
    const res = this.post(getStrapiUrl(lang, target, id), params, {});
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
