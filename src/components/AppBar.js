import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <nav className="flex w-screen bg-primary p-4 items-center justify-end flex-row-reverse lg:justify-between lg:flex-row">
      <div className="flex items-center">
        <h1 className="text-3xl project-tracker text-white px-5 lg:pr-5">
          Project Tracker
        </h1>
        <Link to="/workspaces" className="hidden lg:block text-white">
          My Workspaces
        </Link>
      </div>
      <div className="hidden lg:flex space-x-5 text-white">
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Sign Out</Link>
      </div>
      <div className="lg:hidden">
        <FontAwesomeIcon
          onClick={() => setShowMenu(!showMenu)}
          icon={faBars}
          className="cursor-pointer bg-primary text-white rounded-full text-4xl"
        />
        {showMenu && (
          <div className="w-48 text-primary absolute flex top-14 flex-col rounded-lg p-2 bg-gray-200">
            <div
              className={`${
                location.pathname === "/workspaces" && "hidden"
              } flex flex-col`}
            >
              <p className="bg-gray-200 font-bold text-sm">Workspace</p>
              <Link
                to="/workspaces/hello"
                className="p-2 bg-gray-200 hover:bg-gray-300"
              >
                Dashboard
              </Link>
              <Link
                to="/workspaces/hello/projects"
                className="p-2 bg-gray-200 hover:bg-gray-300"
              >
                My Projects
              </Link>
              <Link
                to="/workspaces/hello/tickets"
                className="p-2 bg-gray-200 hover:bg-gray-300"
              >
                My Tickets
              </Link>
            </div>
            <p className="bg-gray-200 font-bold text-sm pt-2">Account</p>
            <Link
              to="/workspaces"
              className="p-2 bg-gray-200 hover:bg-gray-300"
            >
              My Workspaces
            </Link>
            <Link to="/profile" className="p-2 bg-gray-200 hover:bg-gray-300">
              Profile
            </Link>
            <Link to="/login" className="p-2 bg-gray-200 hover:bg-gray-300">
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppBar;
