import { useStrapiClient } from ".";
import { useHandleError } from "@/utils/error";
import { useRequest } from "ahooks";
import {
  AboutUsJoinUsCategory,
  GetAboutUsAchievementsAward,
  GetAboutUsAchievementsAwardRequest,
  GetAboutUsAlumniMapRequest,
  GetAboutUsJoinUsRequest,
  GetAboutUsJoinUsResponse,
  GetClassesRequest,
  GetCourseLevelTypeRequest,
  GetCoursesRequest,
  GetFacultyRequest,
  GetFacultyResponse,
  GetHomeStudentProjectsRequest,
  GetResourcesContestRequest,
  GetResourcesContestResponse,
  GetTestimonyRequest,
  GetXAlumniRequest,
  GetXAlumniResponse,
  GetProjectsDemoRequest,
  GetAchievementsTimeLineRequest,
  GetResourcesLiveSolutionRequest,
  GetFaqRequest,
  GetFaq,
  FaqCategory,
  GetAboutUsIntroArticleRequest,
} from "./define";
import { isArray } from "lodash";
import { StrapiResponseDataItem } from "./strapiDefine";
import { classifyByAttribution, filterByAttribution } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
/**
 *
 * @returns 获取Faculty
 */
export const useGetFaculty = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetFacultyRequest) => {
      const res: GetFacultyResponse = await client.getFaculty(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取AboutUs Achievements Usaco Medal
 */
export const useGetAboutUsAchievementsAward = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetAboutUsAchievementsAwardRequest) => {
      const res = await client.getAboutUsAchievementsAward(params);

      function groupArray(
        arr: StrapiResponseDataItem<GetAboutUsAchievementsAward>[]
      ) {
        const result: StrapiResponseDataItem<GetAboutUsAchievementsAward>[][] =
          [];
        for (let i = 0; i < arr.length; i += 3) {
          result.push(arr.slice(i, i + 3));
        }
        return result;
      }
      return isArray(res?.data) ? groupArray(res.data) : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取XAlumni 毕业生
 */
export const useGetXAlumni = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetXAlumniRequest) => {
      const res: GetXAlumniResponse = await client.getXAlumni(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取资源目录下的比赛列表
 */
export const useGetResourcesContest = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetResourcesContestRequest) => {
      const res: GetResourcesContestResponse = await client.getResourcesContest(
        params
      );
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取关于我们目录下的Join Us
 */
export const useGetAboutUsJoinUs = (category?: AboutUsJoinUsCategory) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetAboutUsJoinUsRequest) => {
      const res: GetAboutUsJoinUsResponse = await client.getAboutUsJoinUs(
        params
      );
      return isArray(res?.data) ? res.data : [];
    },
    {
      manual: true,
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
          filters: {
            category: {
              $eq: category,
            },
          },
        },
      ],
      onError: handleError,
    }
  );
};

export const useGetTestimony = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetTestimonyRequest) => {
      const res = await client.getTestimony(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取Home Student Projects
 */
export const useGetHomeStudentProjects = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetHomeStudentProjectsRequest) => {
      const res = await client.getHomeStudentProjects(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取Course Level Type
 */
export const useGetCourseLevelType = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetCourseLevelTypeRequest) => {
      const res = await client.getCourseLevelType(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取Courses
 */
export const useGetCourses = (isCamp?: string) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetCoursesRequest) => {
      const res = await client.getCourses(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
          filters: {
            isCamp: {
              $eq: isCamp,
            },
          },
          sort: ["order:desc"],
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取Course Classes
 */
export const useGetClasses = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetClassesRequest) => {
      const res = await client.getClasses(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取AboutUs Alumni Map
 */
export const useGetAboutUsAlumniMap = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetAboutUsAlumniMapRequest) => {
      const res = await client.getAboutUsAlumniMap(params);
      return res?.data?.attributes;
    },
    {
      defaultParams: [
        {
          populate: "*",
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取关于我们目录下的achievements的Projects Demo
 */
export const useGetProjectsDemo = () => {
  const client = useStrapiClient();
  const { lang } = useLang();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetProjectsDemoRequest) => {
      const res = await client.getProjectsDemo(params);
      return isArray(res?.data)
        ? classifyByAttribution(
            res.data,
            lang === "zh" ? "categoryZh" : "categoryEn"
          )
        : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取关于我们目录下的achievements的Time Line
 */
export const useGetAchievementsTimeLine = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetAchievementsTimeLineRequest) => {
      const res = await client.getAchievementsTimeLine(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取AboutUs Intro Article
 */
export const useGetAboutUsIntroArticle = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetAboutUsIntroArticleRequest) => {
      const res = await client.getAboutUsIntroArticle(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取Resources目录下的Live Solution
 */
export const useGetResourcesLiveSolution = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetResourcesLiveSolutionRequest) => {
      const res = await client.getResourcesLiveSolution(params);
      return isArray(res?.data)
        ? classifyByAttribution(res.data, "category")
        : [];
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
        },
      ],
      onError: handleError,
    }
  );
};

/**
 *
 * @returns 获取Faq
 */
export const useGetFaq = <
  T extends boolean = false,
  R = T extends true
    ? StrapiResponseDataItem<GetFaq>[][]
    : StrapiResponseDataItem<GetFaq>[]
>({
  ready,
  isClassify,
  category,
  courseId,
  pageName,
  eventId,
}: {
  ready: boolean; // 是否发请求，用于等待其他请求
  isClassify?: T; // 是否分组
  category?: FaqCategory; // 类别
  courseId?: string[]; // 被用在哪些course 以英文逗号连接的字符串
  pageName?: string[]; // 被用在哪些page 以英文逗号连接的字符串
  eventId?: string[]; // 被用在哪些event 以英文逗号连接的字符串
}) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest<R, [GetFaqRequest]>(
    async (params) => {
      const res = await client.getFaq(params);
      console.log(courseId);
      let data = res?.data;
      // 根据courseId, pageName, eventId做筛选，根据category做分类
      if (courseId && courseId?.length > 0) {
        data = filterByAttribution(data, "courseId", courseId);
      }
      if (pageName && pageName?.length > 0) {
        data = filterByAttribution(data, "pageName", pageName);
      }
      if (eventId && eventId?.length > 0) {
        data = filterByAttribution(data, "eventId", eventId);
      }
      if (isClassify) {
        return classifyByAttribution(data, "category") as R;
      } else {
        return data as R;
      }
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["order:desc"],
          filters: {
            category: {
              $eq: category,
            },
          },
        },
      ],
      ready: ready,
      onError: handleError,
    }
  );
};
