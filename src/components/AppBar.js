import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <nav className="flex w-screen bg-primary p-4 items-center justify-between">
      <Link to="/" className="hidden lg:block text-white">
        My Workspaces
      </Link>
      <div className="hidden lg:flex space-x-5 text-white">
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Sign Out</Link>
      </div>
      <div className="lg:hidden">
        <FontAwesomeIcon
          onClick={() => setShowMenu(!showMenu)}
          icon={faUserCircle}
          className="cursor-pointer bg-primary text-white rounded-full text-4xl"
        />
        {showMenu && (
          <div className="text-primary absolute flex top-14 flex-col items-center rounded-lg">
            <Link
              to="/"
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-t-lg w-36"
            >
              My Workspaces
            </Link>
            <Link
              to="/profile"
              className="p-2 bg-gray-200 w-36 hover:bg-gray-300"
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="p-2 bg-gray-200 hover:bg-gray-300 w-36 rounded-b-lg"
            >
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppBar;
