import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slices/projectsSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => {
    return state.projects.projects;
  });

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((projects) => dispatch(add(projects)));
  }, []);

  const renderProjectCards = () => {
    return projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  };

  return (
    <section className="w-full lg:w-4/5">
      <h1 className="text-5xl m-2 text-primary">Projects</h1>
      {renderProjectCards()}
    </section>
  );
};

export default Projects;
