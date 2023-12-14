import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utils/axios";
import _http from "../../utils/api";
import { DoctorType } from "../../utils/types";

export const doctorEnum = {
  DOCTORS: "DOCTORS",
};

export const doctorsApi = createApi({
  reducerPath: "doctorsApi",
  baseQuery: axiosBaseQuery(undefined, _http),
  endpoints: (builder) => ({
    getAllDoctors: builder.query<DoctorType, void>({
      query: () => ({
        url: "/doctors?populate=*",
      }),
      providesTags: [{ type: doctorEnum.DOCTORS as never }],
    }),
  }),
});

doctorsApi.enhanceEndpoints({
  addTagTypes: [...Object.values(doctorEnum)],
});

export const { useGetAllDoctorsQuery } = doctorsApi;
