import Button from "../components/Button";
import Textfield from "../components/Textfield";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../slices/userSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveAuthTokenInSession = (token) => {
    window.localStorage.setItem("token", token);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // fetch("https://fictional-couscous.herokuapp.com/login", {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userId && data.success === "true") {
          saveAuthTokenInSession(data.token);
          fetch(
            // `https://fictional-couscous.herokuapp.com/users/${data.userId}`,
            `http://localhost:4000/users/${data.userId}`,
            {
              method: "get",
              headers: {
                "Content-Type": "applicaton/json",
                Authorization: `Bearer ${data.token}`,
              },
            }
          )
            .then((res) => res.json())
            .then((user) => {
              if (user && user.email) {
                console.log("user: ", user);
                dispatch(updateUser(user));
                navigate("/projects", { replace: true });
              }
            });
        }
      });
  };
  return (
    <div className="bg-white">
      <h1 className="lg:hidden text-6xl text-center text-primary p-10 project-tracker">
        Project Tracker
      </h1>
      <form onSubmit={onSubmit} className="w-80 mx-auto">
        <h2 className="text-primary text-4xl text-center font-bold">Sign In</h2>
        <hr className="border-gray-200 mx-auto my-4" />
        <Textfield
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required={true}
        />
        <Textfield
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required={true}
          min="8"
        />
        <Button
          title="Sign In"
          color="text-white"
          backgroundColor="bg-primary"
          type="submit"
        />
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-secondary">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
