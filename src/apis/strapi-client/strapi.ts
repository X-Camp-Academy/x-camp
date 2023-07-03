import { useStrapiClient } from ".";
import { useHandleError } from "@/utils/error";
import { useRequest } from "ahooks";
import {
  GetFacultyRequest,
  GetFacultyResponse,
  GetXAlumniRequest,
  GetXAlumniResponse,
} from "./define";

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
      return res?.data;
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
 * @returns 获取XAlumni 毕业生
 */
export const useGetXAlumni = () => {
  const client = useStrapiClient();
  const handleError = useHandleError();
  return useRequest(
    async (params) => {
      const res: GetXAlumniResponse = await client.getXAlumni(params);
      return res?.data;
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
