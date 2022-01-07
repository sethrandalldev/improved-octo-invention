import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="w-full lg:w-4/5">
      <h1 className="text-5xl m-2 text-primary">Projects</h1>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default Projects;
