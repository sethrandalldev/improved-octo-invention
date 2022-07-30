import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Button from "../components/Button";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const projects = useSelector((state) => {
    console.log(state);
    return state.projects.projects;
  });

  const renderProjectCards = () => {
    return projects?.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  };

  return (
    <section className="w-full lg:w-4/5 lg:mx-auto m-5">
      <h1 className="text-5xl text-primary">My Projects</h1>
      <div className="w-32">
        <Button
          onClick={() => setShowModal(!showModal)}
          title="New Project"
          backgroundColor="bg-secondary"
          color="text-white"
        />
      </div>
      {Array.isArray(projects) ? renderProjectCards() : <Loader />}
      {showModal && <ProjectModal />}
    </section>
  );
};

export default Projects;
