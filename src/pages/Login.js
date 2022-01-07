import {
  faUsers,
  faTasks,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import AppFeature from "../components/AppFeature";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex">
      <section className="hidden lg:flex bg-primary h-screen w-3/5 flex-col justify-center items-center relative">
        <div className="w-60 h-40 opacity-10 bg-white absolute top-12 right-0"></div>
        <div className="w-48 h-48 opacity-25 bg-white absolute left-10 bottom-20"></div>
        <div className="w-36 h-36 opacity-25 bg-white absolute top-4 left-72 rounded-full"></div>
        <div className="w-52 h-52 opacity-10 bg-white absolute right-60 rounded-full circle-bottom"></div>
        <div className="arrow-down absolute top-36 left-12"></div>
        <div className="arrow-right absolute bottom-28 right-16"></div>
        <h1 className="text-white text-center text-6xl pb-10 project-tracker">
          Project Tracker
        </h1>
        <div className="flex justify-evenly space-x-10 p-10">
          <AppFeature
            gradient="from-orange-600 to-orange-800"
            icon={faUsers}
            title="Collaborate"
          />
          <AppFeature
            gradient="from-purple-600 to-purple-800"
            icon={faTasks}
            title="Track Progress"
          />
          <AppFeature
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
