import TopBar from "../components/TopBar";
import { Typography } from "@mui/material";
import { getAuth } from "firebase/auth";

const Workspaces = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div>
      <TopBar />
      {user?.displayName ? (
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, m: 2 }}>
          Welcome {user.displayName}!
        </Typography>
      ) : (
        ""
      )}
      <Typography variant="h3" component="div" sx={{ flexGrow: 1, m: 2 }}>
        Workspaces
      </Typography>
    </div>
  );
};

export default Workspaces;
