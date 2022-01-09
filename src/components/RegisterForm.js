import Button from "./Button";
import Textfield from "./Textfield";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const name = `${firstName} ${lastName}`;
    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json)
      .then((data) => console.log(data));
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
