import SideBar from "./SideBar";
import { Box } from "@mui/material";

interface SideBarPageProps {
  children: JSX.Element;
  [x: string]: any;
}

const SideBarPage = ({ children }: SideBarPageProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ m: 2, width: "calc(100vw - 315px)" }}>{children}</Box>
    </Box>
  );
};

export default SideBarPage;
