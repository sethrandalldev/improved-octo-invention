import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slices/projectsSlice";
import Loader from "../components/Loader";
import { update } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector((state) => {
    return state.projects.projects;
  });

  useEffect(() => {
    console.log("projects initialize");
    fetch("http://localhost:4000/projects", {
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((projects) => {
        console.log("projects: ", projects);
        dispatch(add(projects));
      });
  }, []);

  const renderProjectCards = () => {
    return projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  };
  console.log(projects);
  return (
    <section className="w-full lg:w-4/5 lg:mx-auto">
      <h1 className="text-5xl m-2 text-primary">My Projects</h1>
      {projects.length && projects !== "Unauthorized" ? (
        renderProjectCards()
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Projects;
