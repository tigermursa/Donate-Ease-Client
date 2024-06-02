
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://donate-simple-server.vercel.app" }), //the main url link
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        //getting  data from database
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
        getWallData: builder.query({
            query: () => ({
                url: `/api/v3/get`,
                method: "GET",
            }),
            providesTags: ['todo']
        }),
        getVolunteerData: builder.query({
            query: () => ({
                url: `/api/v4/get`,
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
        //posting wall / Create
        addWall: builder.mutation({
            query: (data) => ({
                url: "/api/v3/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['todo']  //for make fetch after the action
        }),
        //posting wall / Create
        addVolunteer: builder.mutation({
            query: (data) => ({
                url: "/api/v4/create",
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
        // Login mutation
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/v1/login",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

//CRUD api hooks
export const { useGetDonationDataQuery, useAddDonationDataMutation,
    useUpdateDataMutation, useDeleteDataMutation, useAddTestimonialMutation,
    useGetTestimonialDataQuery, useGetWallDataQuery, useAddWallMutation,
    useAddVolunteerMutation, useGetVolunteerDataQuery, useLoginMutation } = baseApi;