import { useState } from "react";
import {
  faChevronDown,
  faAlignJustify,
  faThLarge,
  faChevronUp,
  faCog,
  faSignOutAlt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import Logo from "./Logo";
import ToggleSideBar from "./ToggleSideBar";

const SideBar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggle = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <section
      className={`transition-all bg-primary flex flex-col justify-between text-white p-3 relative ${
        isMinimized ? "w-2" : "w-96"
      }`}
    >
      <div className={`flex flex-col w-full ${isMinimized && "hidden"}`}>
        <div className="py-4 flex items-center rounded-full space-x-4">
          <Logo />
          <p className="project-tracker text-3xl">Project Tracker</p>
        </div>
        <div className="pt-5 md:pt-2 flex flex-col w-full">
          <SideBarItem icon={faThLarge} text="Dashboard" />
          <div
            onClick={() => setShowProjects(!showProjects)}
            className="hover:cursor-pointer flex items-center p-3 rounded-lg justify-between hover:bg-white/30 my-2 hover:text-white"
          >
            <div className="flex space-x-6 items-center">
              <div className="w-6 flex items-center justify-evenly">
                <FontAwesomeIcon icon={faAlignJustify} size="lg" />
              </div>
              <h3>My Projects</h3>
            </div>
            <FontAwesomeIcon
              icon={showProjects ? faChevronUp : faChevronDown}
              className="hidden md:block"
            />
          </div>
          <div className={`${showProjects ? "block" : "hidden"} pb-2`}>
            <div className=" ml-6">
              <SideBarItem text="Project 1" />
              <SideBarItem text="Project 2" />
              <SideBarItem text="Project 3" />
            </div>
          </div>
          <SideBarItem icon={faTasks} text="My Tickets" />
          <SideBarItem icon={faCog} text="Settings" />
        </div>
      </div>
      <div className={`${isMinimized && "hidden"}`}>
        <SideBarItem icon={faSignOutAlt} text="Sign Out" />
      </div>
      <ToggleSideBar toggle={toggle} />
    </section>
  );
};

export default SideBar;
