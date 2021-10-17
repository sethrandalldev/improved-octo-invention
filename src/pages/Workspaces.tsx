import TopBar from "../components/TopBar";
import { Typography, IconButton, Box, Tooltip } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import CreateWorkspaceModal from "../components/CreateWorkspaceModal";

const Workspaces = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/${user?.uid}/workspaces`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  });

  const handleSubmit = (e: any, title: string, description: string) => {
    e.preventDefault();
    fetch("http://localhost:8000/workspaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, userId: user?.uid }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsModalOpen(false);
      });
  };

  return (
    <div>
      <TopBar />
      {user?.displayName && (
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, m: 2 }}>
          Welcome {user.displayName}!
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          m: 2,
        }}
      >
        <Typography variant="h4" component="h4" sx={{ mr: 2 }}>
          Workspaces
        </Typography>
        <Tooltip onClick={() => setIsModalOpen(true)} title="Create Workspace">
          <IconButton>
            <Add />
          </IconButton>
        </Tooltip>
      </Box>
      <CreateWorkspaceModal
        handleSubmit={handleSubmit}
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </div>
  );
};

export default Workspaces;
