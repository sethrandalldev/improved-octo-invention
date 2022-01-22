export const getProjects = () => {
  fetch(`http://localhost:4000/projects`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getTicketsByProject = (projectId) => {
  fetch(`http://localhost:4000/projects/${projectId}/tickets`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getProjectUsersByProject = (projectId) => {
  fetch(`http://localhost:4000/projects/${projectId}/project-users`)
    .then((response) => response.json())
    .then((data) => data);
};

export const updateUser = (user) => {
  fetch(`http://localhost:4000/users/${user.id}`, {
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
      console.log(user);
      return user;
    });
};
