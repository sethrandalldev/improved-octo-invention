import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkspaceCard = () => {
  return (
    <div className="shadow-sm hover:shadow-lg flex flex-col w-96 mx-auto my-5">
      <div className="bg-secondary rounded-t-lg p-3 text-white flex items-center justify-between">
        <div>
          <h3 class="text-2xl">Seth Randall Dev</h3>
          <h4>Keep track of all my Github projects</h4>
        </div>
        <div>
          <span>1</span>
          <FontAwesomeIcon icon={faUser} className="mx-2" />
        </div>
      </div>
      <div className="bg-gray-200 flex p-3 justify-evenly rounded-b-lg">
        <p>My Projects: 3</p>
        <p>My Tickets: 7</p>
      </div>
    </div>
  );
};

export default WorkspaceCard;
