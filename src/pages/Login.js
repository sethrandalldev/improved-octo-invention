import AppFeatureSection from "../components/AppFeatureSection";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex overflow-hidden">
      <AppFeatureSection />
      <section className="lg:w-2/5 mx-auto h-screen flex flex-col justify-center p-10">
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
