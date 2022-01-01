import { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Link,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();
  const history = useHistory();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const signUp = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push("/workspaces");
      })
      .catch((error) => {
        console.error(`Error ${error.code}: ${error.message}`);
      });
  };

  const signUpWithGoogle = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // const user = result.user;
        // Add User to database
        // ...
        history.push("/workspaces");
      })
      .catch((error) => {
        console.error(`Error ${error.code}: ${error.message}`);
        console.error(`Email: ${error.email}`);
        console.error(
          `Credential: ${GoogleAuthProvider.credentialFromError(error)}`
        );
        // ...
      });
  };

  return (
    <div id="signup">
      <h1 style={{ textAlign: "center", paddingTop: "80px", fontSize: "60px" }}>
        Project Tracker
      </h1>
      <form onSubmit={signUp}>
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
          <h2>Sign Up</h2>

          <TextField
            InputLabelProps={{ required: false }}
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
            type="email"
          />
          <FormControl sx={{ mb: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" required={false}>
              Password
            </InputLabel>
            <OutlinedInput
              required={true}
              id="outline-adornment-password"
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
            variant="contained"
            sx={{ marginTop: 1, marginBottom: 2 }}
            type="submit"
          >
            Sign Up
          </Button>

          <Divider />
          <Button
            onClick={signUpWithGoogle}
            variant="contained"
            sx={{ marginTop: 2, marginBottom: 1 }}
          >
            Sign Up With Google
          </Button>
          <Link
            href="/login"
            underline="none"
            sx={{ marginTop: 3, textAlign: "center" }}
          >
            Log In
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
