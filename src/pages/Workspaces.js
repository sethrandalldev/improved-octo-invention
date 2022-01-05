import Button from "../components/Button";
import WorkspaceCard from "../components/WorkspaceCard";
import Textfield from "../components/Textfield";
import { useState } from "react";

const Workspaces = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-3/4 lg:w-1/2 mx-auto">
      <div>
        <h2 className="text-5xl py-5">My Workspaces</h2>
        <div className="w-40">
          <Button
            onClick={() => setShowModal(true)}
            title="Create Workspace"
            color="text-white"
            backgroundColor="bg-secondary"
          />
        </div>
      </div>
      <WorkspaceCard />
      {showModal && (
        <div className="flex items-center fixed left-0 top-0 h-screen w-screen bg-black/25">
          <div className="rounded-lg bg-white h-fit w-1/2 lg:w-1/3 mx-auto p-5">
            <h4 className="text-2xl">Create Workspace</h4>
            <Textfield placeholder="Title" />
            <Textfield placeholder="Description" />
            <div className="flex">
              <Button
                onClick={() => setShowModal(false)}
                title="Cancel"
                color="text-secondary"
              />
              <Button
                title="Create"
                backgroundColor="bg-secondary"
                color="text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workspaces;
