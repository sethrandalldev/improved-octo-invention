import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const history = useHistory();
  console.log(history);
  return (
    <Box
      sx={{
        width: 330,
        backgroundColor: "rgba(0,0,0,0.05)",
        height: "calc(100vh - 64px)",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ color: "rgba(0,0,0.38)", p: 2 }}
      >
        Workspace Name
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <List>
          <ListItem>
            <ListItemButton onClick={() => history.push("/dashboard")}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                sx={
                  history.location.pathname === "/dashboard"
                    ? { color: "#1976d2" }
                    : null
                }
              >
                Dashboard
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => history.push("/account-management")}>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText
                sx={
                  history.location.pathname === "/account-management"
                    ? { color: "#1976d2" }
                    : null
                }
              >
                Account Management
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => history.push("/projects")}>
              <ListItemIcon>
                <WorkspacesIcon />
              </ListItemIcon>
              <ListItemText
                sx={
                  history.location.pathname === "/projects"
                    ? { color: "#1976d2" }
                    : null
                }
              >
                My Projects
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => history.push("/tickets")}>
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText
                sx={
                  history.location.pathname === "/tickets"
                    ? { color: "#1976d2" }
                    : null
                }
              >
                My Tickets
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
