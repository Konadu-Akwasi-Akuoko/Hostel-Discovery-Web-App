import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API_URL }),
  // tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query<User[], Pick<User, "name" | "picture" | "email">>({
      query: (userDetails) => ({
        url: "/user",
        method: "POST",
        body: userDetails,
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApiSlice;
