import { useStrapiClient } from '.';
import { useHandleError } from '@/utils/error';
import { useRequest } from 'ahooks';
import {
  GetAboutUsAchievementsAwardRequest,
  GetFacultyRequest,
  GetFacultyResponse,
  GetHomeStudentProjectsRequest,
} from './define';
import { isArray } from 'lodash';
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
          populate: '*',
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
      return isArray(res?.data) ? res.data : [];
    },
    {
      defaultParams: [
        {
          populate: '*',
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
          populate: '*',
        },
      ],
      onError: handleError,
    }
  );
};
