import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import ProjectModal from "../components/ProjectModal";
import { useGetProjectsQuery } from "../api/api";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, error, isLoading } = useGetProjectsQuery();

  const renderProjectCards = () => {
    console.log(data);
    return data?.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  };

  return error ? (
    <>Oh no, there was an error </>
  ) : isLoading ? (
    <>Loading...</>
  ) : (
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
      {renderProjectCards()}
      {showModal && <ProjectModal />}
    </section>
  );
};

export default Projects;
