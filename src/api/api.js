import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fictional-couscous.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "projects",
    }),
  }),
});

export const getProjects = () => {
  fetch(`https://fictional-couscous.herokuapp.com/projects`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const getTicketsByProject = (projectId) => {
  fetch(
    `https://fictional-couscous.herokuapp.com/projects/${projectId}/tickets`
  )
    .then((response) => response.json())
    .then((data) => data);
};

export const getProjectUsersByProject = (projectId) => {
  fetch(
    `https://fictional-couscous.herokuapp.com/projects/${projectId}/project-users`
  )
    .then((response) => response.json())
    .then((data) => data);
};

export const createProject = (title, description) => {
  fetch("https://fictional-couscous.herokuapp.com/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("token"),
    },
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  })
    .then((response) => response.json())
    .then((newProject) => newProject);
};

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
