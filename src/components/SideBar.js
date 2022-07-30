import { useState } from "react";
import {
  faAlignJustify,
  faThLarge,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import SideBarItem from "./SideBarItem";
import Logo from "./Logo";
import ToggleSideBar from "./ToggleSideBar";

const SideBar = () => {
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
          <SideBarItem icon={faThLarge} text="Dashboard" link="/" />
          <SideBarItem
            icon={faAlignJustify}
            text="My Projects"
            link="/projects"
          />
          <SideBarItem icon={faTasks} text="My Tickets" link="/tickets" />
        </div>
      </div>
      <ToggleSideBar toggle={toggle} />
    </section>
  );
};

export default SideBar;
