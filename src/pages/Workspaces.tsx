import TopBar from "../components/TopBar";
import {
  Typography,
  IconButton,
  Box,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import CreateWorkspaceModal from "../components/CreateWorkspaceModal";
import { Workspace } from "../types";

const Workspaces = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    console.log(user);
    fetch(`http://localhost:8000/${user?.uid}/workspaces`)
      .then((res) => res.json())
      .then((result) => {
        setWorkspaces(result);
      });
  }, []);

  const handleSubmit = (e: any, title: string, description: string) => {
    e.preventDefault();
    fetch("http://localhost:8000/workspaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, userId: user?.email }),
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
      <Box sx={{ maxWidth: 750, margin: "0 auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Created By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workspaces.map((workspace: Workspace) => (
                <TableRow
                  key={workspace.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {workspace.title}
                  </TableCell>
                  <TableCell>{workspace.description}</TableCell>
                  <TableCell>{workspace.created_by}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
