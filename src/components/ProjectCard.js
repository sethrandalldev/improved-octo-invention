import { faUser, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate("/workspaces/hello/projects/world", { replace: true })
      }
      className="rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer flex flex-col mx-auto my-5 md:w-3/5 mx-4 "
    >
      <div className="text-primary bg-gray-200 rounded-t-lg p-3 flex items-center justify-between">
        <div>
          <h3 className="text-2xl">{props.title}</h3>
          <h4>{props.description}</h4>
        </div>
        <div>
          <span>{props.projectUserCount}</span>
          <FontAwesomeIcon icon={faUser} className="mx-2 text-3xl" />
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="hover:drop-shadow-2xl hover:opacity-75 text-3xl ml-5 rounded-full"
          />
        </div>
      </div>
      <div className="bg-white flex p-3 justify-evenly rounded-b-lg">
        <p>Role: {props.userRole}</p>
        <p>Tickets: {props.userTickets}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
