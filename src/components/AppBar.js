import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppBar = () => {
  return (
    <nav className="w-screen bg-primary flex justify-between p-4 items-center">
      <Link to="/" className="text-white text-2xl font-bold">
        My Workspaces
      </Link>
      <FontAwesomeIcon
        icon={faUserCircle}
        size="3x"
        className="border-secondary border-2 rounded-full bg-white text-primary"
      />
    </nav>
  );
};

export default AppBar;
