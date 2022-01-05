import WorkspaceMenuItem from "./WorkspaceMenuItem";

const WorkspaceMenu = () => {
  return (
    <section className="w-1/5 bg-gray-200 rounded-lg m-3 p-4 overflow-hidden">
      <h1 className="text-2xl text-primary">Workspace Title</h1>
      <h2 className="text-sm">Workspace Description goes here</h2>
      <hr className="border-primary mx-auto my-4" />
      <div className="flex flex-col">
        <WorkspaceMenuItem title="Dashboard" to="/" />
        <WorkspaceMenuItem title="My Projects" to="/" />
        <WorkspaceMenuItem title="My Tickets" to="/" />
      </div>
    </section>
  );
};

export default WorkspaceMenu;
