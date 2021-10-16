import { Box, TextField, Typography } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import TopBar from "../components/TopBar";

const Account = () => {
  const [fullName, setFullName] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div>
      <TopBar />
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, m: 2 }}>
        My Account
      </Typography>
      <form>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, m: 2 }}>
          My Info
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={fullName}
          onChange={(e: any) => setFullName(e.target.value)}
        />
        <Box sx={{ display: "flex" }}>
          <p>Email: {user?.email}</p>
        </Box>
      </form>
    </div>
  );
};

export default Account;
