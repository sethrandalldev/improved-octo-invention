import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkspaceMenuItem = (props) => {
  return (
    <Link
      className="text-primary p-3 hover:bg-gray-300 justify-between flex items-center"
      to={props.link}
    >
      <span className="px-4">{props.title}</span>
      <FontAwesomeIcon icon={props.icon} />
    </Link>
  );
};

export default WorkspaceMenuItem;
