import {
  faUsers,
  faTasks,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import ProjectFeature from "../components/ProjectFeature";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex">
      <section className="hidden lg:flex bg-primary h-screen w-3/5 flex-col justify-center items-center">
        <h1 className="text-white text-center text-6xl pb-10 project-tracker">
          Project Tracker
        </h1>
        <div className="flex justify-evenly space-x-10 p-10">
          <ProjectFeature
            gradient="from-orange-600 to-orange-800"
            icon={faUsers}
            title="Collaborate"
          />
          <ProjectFeature
            gradient="from-purple-600 to-purple-800"
            icon={faTasks}
            title="Track Progress"
          />
          <ProjectFeature
            gradient="from-green-600 to-green-800"
            icon={faChartPie}
            title="Analyze Projects"
          />
        </div>
      </section>
      <section className="lg:w-2/5 mx-auto h-screen flex flex-col justify-center p-10">
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
