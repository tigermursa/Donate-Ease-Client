
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }), //the main url link
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        //getting data from database
        getDonationData: builder.query({
            query: () => ({
                url: `/api/v1/data`,
                method: "GET",
            }),
            providesTags: ['todo']
        }),
        getTestimonialData: builder.query({
            query: () => ({
                url: `/api/v2/get`,
                method: "GET",
            }),
            providesTags: ['todo']
        }),

        //posting task / Create
        addDonationData: builder.mutation({
            query: (data) => ({
                url: "/api/v1/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['todo']  //for make fetch after the action
        }),
        //posting testimonial / Create
        addTestimonial: builder.mutation({
            query: (data) => ({
                url: "/api/v2/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['todo']  //for make fetch after the action
        }),
        //updating task / Update
        updateData: builder.mutation({
            query: (options) => ({
                url: `/api/v1/data/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['todo'] //for make fetch after the action
        }),
        //deleting task / Delete
        deleteData: builder.mutation({
            query: (options) => ({
                url: `/api/v1/data/${options.id}`,
                method: "DELETE",
                body: options.data,
            }),
            invalidatesTags: ['todo'] //for make fetch after the action
        }),
    }),
});

//CRUD api hooks
export const { useGetDonationDataQuery, useAddDonationDataMutation, useUpdateDataMutation, useDeleteDataMutation, useAddTestimonialMutation, useGetTestimonialDataQuery } = baseApi;