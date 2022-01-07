import {
  faUsers,
  faTasks,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import AppFeature from "../components/AppFeature";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="flex">
      <section className="hidden lg:flex bg-primary h-screen w-3/5 flex-col justify-center items-center">
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
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
