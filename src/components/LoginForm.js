import Button from "../components/Button";
import Textfield from "../components/Textfield";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../slices/userSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = () => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        if (user.id) {
          dispatch(update(user));
          navigate("/projects", { replace: true });
        }
      });
  };
  return (
    <div className="bg-white">
      <h1 className="lg:hidden text-6xl text-center text-primary p-10 project-tracker">
        Project Tracker
      </h1>
      <div className="w-80 mx-auto">
        <h2 className="text-primary text-4xl text-center font-bold">Sign In</h2>
        <hr className="border-gray-200 mx-auto my-4" />
        <Textfield
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <Textfield
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <Button
          onClick={onSubmit}
          title="Sign In"
          color="text-white"
          backgroundColor="bg-primary"
        />
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-secondary">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
