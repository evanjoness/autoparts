import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const brandService = createApi({
    reducerPath:"brand",
    tagTypes:"brands",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/",
        prepareHeaders:(headers, {getState})=>{
            const reducers = getState();
            const token = reducers?.authReducer?.adminToken;
            console.log(token);
            headers.set("authorization", token ? `Bearer ${token}` : "");
            return headers;
        }
    }),
    endpoints: (builder) => {
        return {
          create: builder.mutation({
            query: (name) => {
              return {
                url: "create-brand",
                method: "POST",
                body: name,
              };
            },
            invalidatesTags: ["brands"],
          }),
          updateBrand: builder.mutation({
            query: (data) => {
              return {
                url: `update-brand/${data.id}`,
                method: "PUT",
                body: { name: data.name },
              };
            },
            invalidatesTags: ["brands"],
          }),
          deleteBrand: builder.mutation({
            query: (id) => {
              return {
                url: `delete-brand/${id}`,
                method: "DELETE",
              };
            },
            invalidatesTags: ["brands"],
          }),
          get: builder.query({
            query: (page) => {
              return {
                url: `brands/${page}`,
                method: "GET",
              };
            },
            providesTags: ["brands"],
          }),
          fetchBrand: builder.query({
            query: (id) => {
              return {
                url: `fetch-brand/${id}`,
                method: "GET",
              };
            },
            providesTags: ["brands"],
          }),
          allBrands: builder.query({
            query:()=>{
              return{
                url:"allbrands",
                method:"GET"
              };

            },
            providesTags: ["brands"],
          })
        }
    }
});
export const {useCreateMutation, useGetQuery, useFetchBrandQuery, useAllBrandsQuery,
useUpdateBrandMutation, useDeleteBrandMutation} = brandService
export default brandService;
