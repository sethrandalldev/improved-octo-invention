import { useState } from "react";
import {
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
    <section className="bg-primary w-24 md:w-96 flex flex-col justify-between text-white items-center md:items-baseline">
      <div className="flex flex-col items-center md:items-start">
        <div className="py-4 flex items-center p-4 rounded-full">
          <Logo />
        </div>
        <div className="pt-5 md:pt-2 flex flex-col items-center md:items-baseline">
          <SideBarItem icon={faThLarge} text="Dashboard" />
          <div
            onClick={() => setShowProjects(!showProjects)}
            className="hover:cursor-pointer flex items-center space-x-4 p-3 rounded-full md:rounded-lg justify-between hover:bg-white/30 m-3 hover:text-white"
          >
            <div className="flex space-x-4 items-center">
              <FontAwesomeIcon icon={faAlignJustify} />
              <h3 className="hidden md:block">My Projects</h3>
            </div>
            <FontAwesomeIcon
              icon={showProjects ? faCaretUp : faCaretDown}
              className="hidden md:block"
            />
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
