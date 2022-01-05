import { Link } from "react-router-dom";

const WorkspaceMenuItem = (props) => {
  return (
    <Link className="text-primary p-3 hover:bg-gray-300" to={props.to}>
      {props.title}
    </Link>
  );
};

export default WorkspaceMenuItem;
