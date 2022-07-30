import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  console.log(props.project);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/projects/world", { replace: true })}
      className="rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer flex flex-col mx-auto my-5 w-4/5 md:w-3/5 lg:w-1/2"
    >
      <div className="text-primary bg-gray-200 rounded-t-lg p-3 flex items-center justify-between">
        <div>
          <h3 className="text-2xl">{props.project.title}</h3>
          <h4 className="text-xl">{props.project.description}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
