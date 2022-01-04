import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkspaceCard = (props) => {
  return (
    <div className="shadow-sm hover:shadow-lg hover:cursor-pointer flex flex-col mx-auto my-5">
      <div className="bg-secondary rounded-t-lg p-3 text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl">{props.title}</h3>
          <h4>{props.description}</h4>
        </div>
        <div>
          <span>{props.workspaceUserCount}</span>
          <FontAwesomeIcon icon={faUser} className="mx-2" />
        </div>
      </div>
      <div className="bg-gray-200 flex p-3 justify-evenly rounded-b-lg">
        <p>My Projects: {props.userProjects}</p>
        <p>My Tickets: {props.userTickets}</p>
      </div>
    </div>
  );
};

export default WorkspaceCard;
