import { useState } from "react";
import {
  faHome,
  faUserCircle,
  faCaretDown,
  faAlignJustify,
  faThLarge,
  faCaretUp,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import Logo from "./Logo";

const SideBar = () => {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <section className="w-96 flex flex-col justify-between text-gray-500">
      <div className="flex flex-col">
        <div className="p-4 flex items-center rounded-full">
          <Logo />
        </div>
        <div>
          <h3 className="font-bold px-2 m-3">Menu</h3>
          <SideBarItem icon={faThLarge} text="Dashboard" />
          <div
            onClick={() => setShowProjects(!showProjects)}
            className="hover:cursor-pointer flex items-center space-x-4 p-3 rounded-lg justify-between hover:bg-secondary/30 m-3 hover:text-secondary"
          >
            <div className="flex space-x-4 items-center">
              <FontAwesomeIcon icon={faAlignJustify} size="x" />
              <h3>My Projects</h3>
            </div>
            <FontAwesomeIcon icon={showProjects ? faCaretUp : faCaretDown} />
          </div>
          <div className={`${showProjects ? "block" : "hidden"} pb-2`}>
            <div className="border-l-gray-500 border-l-2 ml-6">
              <SideBarItem text="Project 1" />
              <SideBarItem text="Project 2" />
              <SideBarItem text="Project 3" />
            </div>
          </div>
          <SideBarItem icon={faCog} text="Settings" />
        </div>
      </div>
      <SideBarItem icon={faSignOutAlt} text="Sign Out" />
    </section>
  );
};

export default SideBar;
