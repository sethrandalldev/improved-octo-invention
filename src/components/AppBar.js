import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBarMenuItem from "./AppBarMenuItem";

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <nav
      className={`w-screen bg-primary flex p-4 items-center ${
        location.pathname === "/" ? "justify-end" : "justify-between"
      }`}
    >
      <Link
        to="/"
        className={`${
          location.pathname === "/" && "hidden"
        } text-white text-2xl font-bold`}
      >
        My Workspaces
      </Link>
      <div className="float-left overflow-hidden">
        <FontAwesomeIcon
          onClick={() => setShowMenu(!showMenu)}
          icon={faUserCircle}
          size="3x"
          className="hover:cursor-pointer bg-white rounded-full text-primary"
        />
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } absolute bg-gray-100 right-2 w-40 shadow-lg mt-2 transition-all`}
        >
          <AppBarMenuItem title="My Profile" />
          <AppBarMenuItem title="Sign Out" />
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
