import { useState } from "react";
import {
  faHome,
  faUserCircle,
  faCaretDown,
  faAlignJustify,
  faThLarge,
  faCaretUp,
  faFolder,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <section className="bg-slate-200 w-96 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex space-x-4 items-center p-4">
          <Link to="/profile">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="3x"
              className="bg-primary border-primary text-slate-200 rounded-full border-2 shadow-xl"
            />
          </Link>
          <div>
            <h3 className="text-2xl pt-4 font-bold">Seth Randall</h3>
            <h4 className="text-sm pb-4 font-bold">Software Engineer</h4>
          </div>
        </div>
        <div className="hover:bg-slate-300 hover:cursor-pointer flex items-center space-x-4 p-5 my-2">
          <FontAwesomeIcon icon={faHome} size="x" />
          <h3>My Projects</h3>
        </div>
        <div>
          <h3 className="font-bold px-2">Workspace Menu</h3>
          <div className="hover:bg-slate-300 hover:cursor-pointer flex items-center space-x-4 p-5">
            <FontAwesomeIcon icon={faThLarge} size="x" />
            <h3>Dashboard</h3>
          </div>
          <div
            onClick={() => setShowProjects(!showProjects)}
            className={`${
              showProjects && "bg-slate-300"
            } hover:bg-slate-300 hover:cursor-pointer flex items-center space-x-4 p-5 justify-between`}
          >
            <div className="flex space-x-4 items-center">
              <FontAwesomeIcon icon={faAlignJustify} size="x" />
              <h3>My Projects</h3>
            </div>
            <FontAwesomeIcon icon={showProjects ? faCaretUp : faCaretDown} />
          </div>
          <div
            className={`${showProjects ? "block" : "hidden"} bg-slate-300 py-4`}
          >
            <div className="border-l-primary border-l-2 ml-6">
              <div className="cursor-pointer flex items-center space-x-4 py-3 px-4 hover:bg-slate-400">
                <FontAwesomeIcon icon={faFolder} />
                <h4>Project 1</h4>
              </div>
              <div className="cursor-pointer flex items-center space-x-4 py-3 px-4 hover:bg-slate-400">
                <FontAwesomeIcon icon={faFolder} />
                <h4>Project 2</h4>
              </div>
              <div className="cursor-pointer flex items-center space-x-4 py-3 px-4 hover:bg-slate-400">
                <FontAwesomeIcon icon={faFolder} />
                <h4>Project 3</h4>
              </div>
            </div>
          </div>
          <div className="hover:bg-slate-300 hover:cursor-pointer flex items-center space-x-4 p-5">
            <FontAwesomeIcon icon={faCog} size="x" />
            <h3>Settings</h3>
          </div>
        </div>
      </div>
      <div className="hover:bg-slate-300 hover:cursor-pointer flex items-center space-x-4 p-5">
        <FontAwesomeIcon icon={faSignOutAlt} size="x" />
        <h3>Sign Out</h3>
      </div>
    </section>
  );
};

export default SideBar;
