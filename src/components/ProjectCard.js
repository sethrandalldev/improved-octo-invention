import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="rounded-lg flex flex-col mx-auto my-5 w-4/5 md:w-3/5 lg:w-1/2">
      <div className="text-primary bg-gray-200 rounded-t-lg p-3 flex items-center justify-between">
        <div>
          <h3 className="text-2xl">{props.project.title}</h3>
          <h4 className="text-xl">{props.project.description}</h4>
        </div>
        <Link to={`/projects/${props.project.id}`}>View</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
