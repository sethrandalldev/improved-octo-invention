import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://fictional-couscous.herokuapp.com/",
    baseUrl: "http://localhost:4000/",
    keepUnusedDataFor: 0,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getProjectById: builder.query({
      query: (projectId) => `projects/${projectId}`,
    }),
    getProjects: builder.query({
      query: () => "projects",
    }),
    createProject: builder.mutation({
      query: (project) => ({
        url: "projects",
        method: "POST",
        body: project,
      }),
      transformResponse: (response) => response.data,
    }),
    getTicketsByProject: builder.query({
      query: (projectId) => `projects/${projectId}/tickets`,
    }),
    getProjectUsersByProject: builder.query({
      query: (projectId) => `projects/${projectId}/project-users`,
    }),
  }),
});

export const {
  useGetProjectByIdQuery,
  useGetProjectsQuery,
  useGetTicketsByProjectQuery,
  useCreateProjectMutation,
} = api;

export const updateUser = (user) => {
  fetch(`https://fictional-couscous.herokuapp.com/users/${user.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    }),
  })
    .then((response) => response.json())
    .then((user) => {
      return user;
    });
};
