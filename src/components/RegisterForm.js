import Button from "./Button";
import Textfield from "./Textfield";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../slices/userSlice";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveAuthTokenInSession = (token) => {
    window.localStorage.setItem("token", token);
  };

  const onSubmit = () => {
    fetch("https://fictional-couscous.herokuapp.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userId && data.success === "true") {
          saveAuthTokenInSession(data.token);
          fetch(
            `https://fictional-couscous.herokuapp.com/users/${data.userId}`,
            {
              method: "get",
              headers: {
                "Content-Type": "applicaton/json",
                Authorization: data.token,
              },
            }
          )
            .then((res) => res.json())
            .then((user) => {
              if (user && user.email) {
                dispatch(update(user));
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
      <div className="w-80 mx-auto">
        <h2 className="text-primary text-4xl text-center font-bold">Sign Up</h2>
        <hr className="border-gray-200 mx-auto my-4" />
        <Textfield
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          placeholder="First Name"
          type="text"
        />
        <Textfield
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          placeholder="Last Name"
          type="text"
        />
        <Textfield
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          type="email"
        />
        <Textfield
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type="password"
        />
        <Button
          title="Create Account"
          color="text-white"
          backgroundColor="bg-primary"
          onClick={onSubmit}
        />
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
