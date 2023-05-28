import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const modelService = createApi({
  reducerPath: "model",
  tagTypes: "models",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.adminToken;
      console.log(token);
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      create: builder.mutation({
        query: (name) => {
          return {
            url: "create-model",
            method: "POST",
            body: name,
          };
        },
        invalidatesTags: ["models"],
      }),
    };
  },
});
export const {
  useCreateMutation
} = modelService;
export default modelService;