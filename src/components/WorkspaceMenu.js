import WorkspaceMenuItem from "./WorkspaceMenuItem";
import {
  faThLarge,
  faAlignJustify,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const WorkspaceMenu = () => {
  const location = useLocation();
  return (
    <section
      className={`${
        location.pathname === "/workspaces" ? "lg:hidden" : "lg:block"
      } hidden w-1/5 bg-gray-200 rounded-lg m-3 p-4 overflow-hidden shadow-lg h-fit`}
    >
      <h1 className="text-2xl text-primary">Workspace Title</h1>
      <h2 className="text-sm my-2">Workspace Description goes here</h2>
      <hr className="border-primary mx-auto my-4" />
      <div className="flex flex-col">
        <WorkspaceMenuItem
          link="/workspaces/hello"
          icon={faThLarge}
          title="Dashboard"
          to="/"
        />
        <WorkspaceMenuItem
          link="/workspaces/hello/projects"
          icon={faAlignJustify}
          title="My Projects"
          to="/"
        />
        <WorkspaceMenuItem
          link="/workspaces/hello/tickets"
          icon={faTasks}
          title="My Tickets"
          to="/"
        />
      </div>
    </section>
  );
};

export default WorkspaceMenu;
