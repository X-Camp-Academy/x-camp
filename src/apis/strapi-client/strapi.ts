import { useLang } from '@/hoc/with-intl/define';
import { useHandleError } from '@/utils/error';
import { classifyByAttribution, filterByAttribution } from '@/utils/public';
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
  GetSchoolCalendarRequest,
  GetStudentProjectsRequest,
  GetTimeLineRequest,
  GetUSACOAMARequest,
  GetUSACOMedalVideoRequest,
  GetUSACOSpotlightRequest,
  GetUserSearchRequest,
  GetXAlumniMapRequest,
  GetXAlumniStoryRequest,
  JoinUsCategory,
  NewEventCategory,
  SubmitQuestionRequest
} from './define';
import { AndOrFilters, FilterFields, StrapiResponseDataItem, sortDesc } from './strapiDefine';

export const useGetFaculty = ({ pageName }: { pageName?: string[] }) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetFacultyRequest) => {
      const res: GetFacultyResponse = await client.getFaculty(params);
      let data = [];
      if (!pageName) {
        data = res?.data;
      } else {
        data.push(...filterByAttribution(res?.data, 'pageName', pageName));
      }
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
  pageName,
  sortField
}: {
  tag?: NewEventCategory;
  current?: number;
  pageSize?: number;
  manual?: boolean;
  pageName?: string[];
  sortField?: string[];
}) => {
  const client = useStrapiClient();
  const handleError = useHandleError();

  return useRequest(
    async (params: GetNewEventRequest) => {
      const res: GetNewEventResponse = await client.getNewEvent(params);

      let result: GetNewEventResponse = { ...res, data: [] };
      if (!pageName) {
        result['data'] = res.data;
      } else {
        result['data'].push(...filterByAttribution(res?.data, 'pageName', pageName));
      }
      result['data'] = result?.data;
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

export const useGetSchoolCalendar = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetSchoolCalendarRequest) => {
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
      const res = await client.getContests(params);
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

export const useGetXAlumniStory = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetXAlumniStoryRequest) => {
      const res = await client.getXAlumniStory(params);
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
    async (params: GetSchoolCalendarRequest) => {
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

export const useGetReviews = ({ ready, pageName }: { ready: boolean; pageName?: string[] }) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetReviewsRequest) => {
      const res = await client.getReviews(params);
      let data = [];
      if (!pageName) {
        data = res?.data;
      } else {
        data.push(...filterByAttribution(res?.data, 'pageName', pageName));
      }
      return data;
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

export const useGetUSACOVideoMedal = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetUSACOMedalVideoRequest) => {
      const res = await client.getUSACOMedalVideo(params);
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
  pageName
}: {
  ready: boolean;
  isClassify?: T;
  category?: FaqCategory;
  pageName?: string[];
}) => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest<R, [GetFaqRequest]>(
    async (params) => {
      const res = await client.getFaq(params);
      let data = [];
      if (!pageName) {
        data = res?.data;
      } else {
        data.push(...filterByAttribution(res?.data, 'pageName', pageName));
      }
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
