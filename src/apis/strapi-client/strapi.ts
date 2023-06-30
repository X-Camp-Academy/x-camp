import { useLang } from "@/utils/intl";
import { useStrapiClient } from ".";
import { useHandleError } from "@/utils/error";
import { useRequest } from "ahooks";
import { GetFacultyRequest, GetFacultyResponse } from "./define";

export const useGetFaculty = () => {
  const client = useStrapiClient();
  const lang = useLang();
  const handleError = useHandleError();
  return useRequest(
    async (params: GetFacultyRequest) => {
      const res: GetFacultyResponse = await client.getList(
        params,
        lang,
        "XC-Faculty"
      );
      return res?.data;
    },
    {
      defaultParams: [
        {
          populate: "*",
          sort: ["updatedAt:desc"],
        },
      ],

      onError: handleError,
    }
  );
};
