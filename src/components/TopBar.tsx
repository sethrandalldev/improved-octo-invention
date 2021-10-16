import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const auth = getAuth();
  const user = auth.currentUser;
  const history = useHistory();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            href="/workspaces"
            sx={{ textDecoration: "none", color: "#fff" }}
          >
            Project Tracker
          </Link>
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem disabled={true}>{user?.email}</MenuItem>
            <MenuItem onClick={() => history.push("/workspaces")}>
              Workspaces
            </MenuItem>
            <MenuItem onClick={() => history.push("/account")}>
              My account
            </MenuItem>
            <MenuItem
              onClick={() => {
                signOut(auth).then(() => {
                  history.push("/login");
                });
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
