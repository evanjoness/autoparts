import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const modelService = createApi({
    reducerPath:"model",
    tagTypes:"models",
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
    endpoints:(builder)=>{
        return {
            cModel: builder.mutation({
                query:(data)=>{
                    return{
                        url:"/create-model",
                        method:"POST",
                        body:data
                    }
                },

                invalidatesTags: ['products']
            }), 
            updateModel:builder.mutation({
                query:data=>{
                    return{
                        url:"/model",
                        method:"PUT",
                        body:data
                    }
                },
                invalidatesTags: ['products']
            }),
            getModels : builder.query({
                query:(page)=>{
                    return{
                        url:`/models/${page}`,
                        method:"GET"
                    }
                },
                providesTags: ['models']
            }),
            getModel : builder.query({
                query:(id)=>{
                    return {
                        url:`/model/${id}`,
                        method:"GET"
                    }
                }, 
                providesTags: ['models']
            })
        }
    }
})
export const {useCModelMutation,useUpdateModelMutation, useGetModelsQuery, useGetModelQuery,} = modelService;
export default modelService;