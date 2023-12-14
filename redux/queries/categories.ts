import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utils/axios";
import _http from "../../utils/api";
import { CategoryType } from "../../utils/types";

export const categoriesEnum = {
  CATEGORIES: "CATEGORIES",
};

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: axiosBaseQuery(undefined, _http),
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoryType, void>({
      query: () => ({
        url: "/categories?populate=*",
      }),
      providesTags: [{ type: categoriesEnum.CATEGORIES as never }],
    }),
  }),
});

categoriesApi.enhanceEndpoints({
  addTagTypes: [...Object.values(categoriesEnum)],
});

export const { useGetAllCategoriesQuery } = categoriesApi;
