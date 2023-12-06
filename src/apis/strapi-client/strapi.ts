import { useLang } from '@/hoc/with-intl/define';
import { useHandleError } from '@/utils/error';
import { classifyByAttribution, deduplicateArray, filterByAttribution } from '@/utils/public';
import { useRequest } from 'ahooks';
import { isArray } from 'lodash';
import { useStrapiClient } from '.';
import {
  FaqCategory,
  GetCommunityRequest,
  GetCommunityResponse,
  GetContestsRequest,
  GetCourses,
  GetCoursesRequest,
  GetFacultyRequest,
  GetFacultyResponse,
  GetFaq,
  GetFaqRequest,
  GetJoinUsRequest,
  GetJoinUsResponse,
  GetNewEvent,
  GetNewEventRequest,
  GetNewEventResponse,
  GetPartnerRequest,
  GetProjectDemosRequest,
  GetReviewsRequest,
  GetSchoolCalendarsRequest,
  GetStudentProjectsRequest,
  GetTimeLineRequest,
  GetUSACOAMARequest,
  GetUSACOLiveSolutionRequest,
  GetUSACOSpotlightRequest,
  GetUserSearchRequest,
  GetXAlumniMapRequest,
  JoinUsCategory,
  NewEventCategory,
  SubmitQuestionRequest
} from './define';
import { AndOrFilters, FilterFields, StrapiResponseDataItem, sortDesc } from './strapiDefine';

// 被用在哪些course 以英文逗号连接的字符串
// 被用在哪些page 以英文逗号连接的字符串
// 被用在哪些event 以英文逗号连接的字符串

interface Props {
  courseId?: string[];
  pageName?: string[];
  eventId?: string[];
}

export const useGetFaculty = ({ courseId, pageName, eventId }: Props) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetFacultyRequest) => {
      const res: GetFacultyResponse = await client.getFaculty(params);
      let data = [];
      if (!courseId && !pageName && !eventId) {
        // 如果三个选项都没填则取所有的
        data = res?.data;
      } else {
        // 根据courseId, pageName, eventId做筛选，根据category做分类
        if (courseId) {
          data.push(...filterByAttribution(res?.data, 'courseId', courseId));
        }
        if (pageName) {
          data.push(...filterByAttribution(res?.data, 'pageName', pageName));
        }
        if (eventId) {
          data.push(...filterByAttribution(res?.data, 'eventId', eventId));
        }
      }
      data = deduplicateArray(data); // 去重
      return data;
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};

export const useGetNewEvent = ({
  tag,
  current = 1,
  pageSize = 999,
  manual = false,
  courseId,
  pageName,
  eventId,
  sortField
}: {
  tag?: NewEventCategory;
  current?: number;
  pageSize?: number;
  manual?: boolean;
  courseId?: string[];
  pageName?: string[];
  eventId?: string[];
  sortField?: string[];
}) => {
  const client = useStrapiClient();
  const handleError = useHandleError();

  return useRequest(
    async (params: GetNewEventRequest) => {
      const res: GetNewEventResponse = await client.getNewEvent(params);

      let result: GetNewEventResponse = { ...res, data: [] };
      if (!courseId && !pageName && !eventId) {
        // 如果三个选项都没填则取所有的
        result['data'] = res.data;
      } else {
        // 根据courseId, pageName, eventId做筛选，根据category做分类
        if (courseId) {
          result['data'].push(...filterByAttribution(res?.data, 'courseId', courseId));
        }
        if (pageName) {
          result['data'].push(...filterByAttribution(res?.data, 'pageName', pageName));
        }
        if (eventId) {
          result['data'].push(...filterByAttribution(res?.data, 'eventId', eventId));
        }
      }
      result['data'] = deduplicateArray(result?.data);
      return result || {};
    },
    {
      manual,
      defaultParams: [
        {
          populate: '*',
          sort: sortField ? (sortField as Array<keyof GetNewEvent> | Array<keyof sortDesc<GetNewEvent>>) : ['order:desc'],
          filters: {
            tags: tag ? { $eq: tag } : {}
          },
          pagination: {
            page: current,
            pageSize
          }
        }
      ],
      onError: handleError
    }
  );
};

export const useGetUSACOSpotlight = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetUSACOSpotlightRequest) => {
      const res = await client.getUSACOSpotlight(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};

export const useGetSchoolCalendars = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetSchoolCalendarsRequest) => {
      const res = await client.getSchoolCalendar(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*'
        }
      ],
      onError: handleError
    }
  );
};

export const useGetContests = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetContestsRequest) => {
      const res = await client.getContest(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};

export const useGetCommunity = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetCommunityRequest) => {
      const res: GetCommunityResponse = await client.getCommunity(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};

export const useGetJoinUs = (category?: JoinUsCategory) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetJoinUsRequest) => {
      const res: GetJoinUsResponse = await client.getJoinUs(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      manual: true,
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc'],
          filters: {
            category: {
              $eq: category
            }
          }
        }
      ],
      onError: handleError
    }
  );
};

export const useGetReviews = ({
  ready,
  courseId,
  pageName,
  eventId
}: {
  ready: boolean; // 是否发请求，用于等待其他请求
  courseId?: string[]; // 被用在哪些course 以英文逗号连接的字符串
  pageName?: string[]; // 被用在哪些page 以英文逗号连接的字符串
  eventId?: string[]; // 被用在哪些event 以英文逗号连接的字符串
}) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetReviewsRequest) => {
      const res = await client.getReviews(params);
      let data = [];
      if (!courseId && !pageName && !eventId) {
        // 如果三个选项都没填则取所有的
        data = res?.data;
      } else {
        // 根据courseId, pageName, eventId做筛选，根据category做分类
        if (courseId) {
          data.push(...filterByAttribution(res?.data, 'courseId', courseId));
        }
        if (pageName) {
          data.push(...filterByAttribution(res?.data, 'pageName', pageName));
        }
        if (eventId) {
          data.push(...filterByAttribution(res?.data, 'eventId', eventId));
        }
      }
      return deduplicateArray(data); // 去重
    },
    {
      defaultParams: [
        {
          populate: '*'
        }
      ],
      ready: ready,
      onError: handleError
    }
  );
};

export const useGetStudentProjects = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetStudentProjectsRequest) => {
      const res = await client.getStudentProjects(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*'
        }
      ],
      onError: handleError
    }
  );
};

export const useGetCourses = ({
  filters,
  pagination,
  manual = false
}: {
  filters?: Partial<FilterFields<GetCourses>> | AndOrFilters<FilterFields<GetCourses>> | undefined;
  pagination?: { page: number; pageSize: number };
  manual?: boolean;
}) => {
  const client = useStrapiClient();
  const handleError = useHandleError();

  return useRequest(
    async (params: GetCoursesRequest) => {
      const res = await client.getCourses(params);
      return res;
    },
    {
      manual,
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc'],
          filters: filters ?? {},
          pagination: pagination ?? {}
        }
      ],
      onError: handleError
    }
  );
};

// !暂时保留
export const useGetXAlumniMap = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetXAlumniMapRequest) => {
      const res = await client.getXAlumniMap(params);
      return res?.data?.attributes;
    },
    {
      defaultParams: [
        {
          populate: '*'
        }
      ],
      onError: handleError
    }
  );
};

export const useGetProjectDemos = () => {
  const client = useStrapiClient();
  const { lang } = useLang();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetProjectDemosRequest) => {
      const res = await client.getProjectDemos(params);
      return isArray(res?.data) ? classifyByAttribution(res.data, lang === 'zh' ? 'categoryZh' : 'categoryEn') : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};

export const useGetTimeLine = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetTimeLineRequest) => {
      const res = await client.getTimeLine(params);
      return isArray(res?.data) ? res?.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*'
        }
      ],
      onError: handleError
    }
  );
};

export const useGetUSACOLiveSolution = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetUSACOLiveSolutionRequest) => {
      const res = await client.getUSACOLiveSolution(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};

export const useGetFaq = <T extends boolean = false, R = T extends true ? StrapiResponseDataItem<GetFaq>[][] : StrapiResponseDataItem<GetFaq>[]>({
  ready,
  isClassify,
  category,
  courseId,
  pageName,
  eventId
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
      let data = [];
      if (!courseId && !pageName && !eventId) {
        // 如果三个选项都没填则取所有的
        data = res?.data;
      } else {
        // 根据courseId, pageName, eventId做筛选，根据category做分类
        if (courseId) {
          data.push(...filterByAttribution(res?.data, 'courseId', courseId));
        }
        if (pageName) {
          data.push(...filterByAttribution(res?.data, 'pageName', pageName));
        }
        if (eventId) {
          data.push(...filterByAttribution(res?.data, 'eventId', eventId));
        }
      }
      data = deduplicateArray(data); // 去重
      if (isClassify) {
        return classifyByAttribution(res?.data, 'category') as R;
      } else {
        return data as R;
      }
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc'],
          filters: {
            category: category ? { $eq: category } : {}
          }
        }
      ],
      ready: ready,
      onError: handleError
    }
  );
};

export const useGetPartner = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetPartnerRequest) => {
      const res = await client.getPartner(params);
      return isArray(res?.data) ? classifyByAttribution(res.data, 'category') : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};

export const useGetUserSearchMap = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetUserSearchRequest) => {
      const res = await client.getUserSearchMap(params);
      return res?.data?.attributes;
    },
    {
      defaultParams: [
        {
          populate: '*'
        }
      ],
      onError: handleError
    }
  );
};

export const useSubmitQuestion = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: SubmitQuestionRequest) => {
      const res = await client.submitQuestion(params);
      return res;
    },
    {
      manual: true,
      onError: handleError
    }
  );
};

export const useGetUSACOAMA = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetUSACOAMARequest) => {
      const res = await client.getUSACOAMA(params);
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
          sort: ['order:desc']
        }
      ],
      onError: handleError
    }
  );
};
