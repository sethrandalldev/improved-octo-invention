import Button from "../components/Button";
import Textfield from "../components/Textfield";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="lg:hidden text-5xl text-center text-primary p-10">
        Project Tracker
      </h1>
      <h2 className="text-primary text-4xl text-center">Sign In</h2>
      <hr className="border-gray-200 mx-auto my-4" />
      <Textfield placeholder="Email" type="email" />
      <Textfield placeholder="Password" type="password" />
      <Button title="Sign In" color="text-white" backgroundColor="bg-primary" />
      <p className="text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-secondary">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
