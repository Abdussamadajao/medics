import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utils/axios";
import _http from "../../utils/api";
import { HospitalType } from "../../utils/types";

export const hospitalEnum = {
  HOSPITALS: "HOSPITALS",
};

export const hospitalApi = createApi({
  reducerPath: "hospitalApi",
  baseQuery: axiosBaseQuery(undefined, _http),
  endpoints: (builder) => ({
    getAllHospitals: builder.query<HospitalType, void>({
      query: () => ({
        url: "/hospitals?populate=*",
      }),
      providesTags: [{ type: hospitalEnum.HOSPITALS as never }],
    }),
  }),
});

hospitalApi.enhanceEndpoints({
  addTagTypes: [...Object.values(hospitalEnum)],
});

export const { useGetAllHospitalsQuery } = hospitalApi;
