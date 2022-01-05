import Button from "./Button";
import Textfield from "./Textfield";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="lg:hidden text-5xl text-center text-primary p-10">
        Project Tracker
      </h1>
      <h2 className="text-primary text-4xl text-center">Sign Up</h2>
      <hr className="border-gray-200 mx-auto my-4" />
      <Textfield placeholder="First Name" type="text" />
      <Textfield placeholder="Last Name" type="text" />
      <Textfield placeholder="Email" type="email" />
      <Textfield placeholder="Password" type="password" />
      <Button
        title="Create Account"
        color="text-white"
        backgroundColor="bg-primary"
      />
      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
