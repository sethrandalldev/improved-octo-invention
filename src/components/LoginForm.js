import Button from "../components/Button";
import Textfield from "../components/Textfield";

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
      <hr className="border-gray-200 mx-auto my-4" />
      <Button
        title="Sign In with Google"
        color="text-white"
        backgroundColor="bg-secondary"
      />
    </div>
  );
};

export default LoginForm;
