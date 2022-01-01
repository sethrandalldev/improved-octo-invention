import { Box } from "@mui/material";
import SideBar from "../components/SideBar";

const Projects = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ m: 2, width: "calc(100vw - 315px)" }}>
        <h1>Projects</h1>
      </Box>
    </Box>
  );
};

export default Projects;
