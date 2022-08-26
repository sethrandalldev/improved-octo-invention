import AppFeatureSection from "../components/AppFeatureSection";
import LoginForm from "../components/LoginForm";
import { Navigate } from "react-router-dom";

const Login = () => {
  const token = window.localStorage.getItem("token");

  return token ? (
    <Navigate to="/projects" replace={true} />
  ) : (
    <div className="flex overflow-hidden">
      <AppFeatureSection />
      <section className="lg:w-2/5 mx-auto h-screen flex flex-col justify-center p-10">
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
