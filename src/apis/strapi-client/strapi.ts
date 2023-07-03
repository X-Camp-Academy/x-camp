import { useStrapiClient } from ".";
import { useHandleError } from "@/utils/error";
import { useRequest } from "ahooks";
import { GetFacultyRequest, GetFacultyResponse } from "./define";

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
