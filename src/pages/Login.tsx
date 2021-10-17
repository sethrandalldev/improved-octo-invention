import { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Link,
  Divider,
  IconButton,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  Typography,
} from "@mui/material";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();
  const history = useHistory();
  const auth = getAuth();
  console.log(auth);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const login = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        history.push("/workspaces");
      })
      .catch((error) => {
        console.error(`Error ${error.code}: ${error.message}`);
      });
  };

  const loginWithGoogle = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // const user = result.user;
        history.push("/workspaces");
      })
      .catch((error) => {
        console.error(`Error ${error.code}: ${error.message}`);
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div id="signup">
      <h1 style={{ textAlign: "center", paddingTop: "80px", fontSize: "60px" }}>
        Project Tracker
      </h1>
      <form onSubmit={login}>
        <Box
          id="signup-box"
          sx={{
            borderRadius: "10px",
            maxWidth: 400,
            margin: "0 auto",
            padding: "25px",
            border: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            borderWidth: 1,
            color: "#000",
          }}
        >
          <Typography variant="h5" component="h5">
            Login
          </Typography>
          <TextField
            InputLabelProps={{ required: false }}
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          />
          <FormControl sx={{ mb: 1 }} variant="outlined">
            <InputLabel htmlFor="standard-adornment-password" required={false}>
              Password
            </InputLabel>
            <OutlinedInput
              required={true}
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 1, marginBottom: 2 }}
          >
            Login
          </Button>
          <Divider />
          <Button
            onClick={loginWithGoogle}
            variant="contained"
            sx={{ marginTop: 2, marginBottom: 1 }}
          >
            Login With Google
          </Button>
          <Link
            href="/signup"
            underline="none"
            sx={{ marginTop: 3, textAlign: "center" }}
          >
            Sign Up
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Login;
