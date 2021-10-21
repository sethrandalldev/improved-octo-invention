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

const SideBar = () => {
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
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText>Account Management</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <WorkspacesIcon />
              </ListItemIcon>
              <ListItemText>My Projects</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText>My Tickets</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
