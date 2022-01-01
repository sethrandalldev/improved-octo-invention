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
    <Box sx={{ maxWidth: 750, margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: 750,
          mt: 3,
          mb: 3,
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>My Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workspaces.map((workspace: Workspace) => (
              <TableRow
                hover
                key={workspace.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {workspace.title}
                </TableCell>
                <TableCell>{workspace.description}</TableCell>
                <TableCell>Member</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CreateWorkspaceModal
        handleSubmit={handleSubmit}
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </Box>
  );
};

export default Workspaces;
