import AppFeature from "./AppFeature";
import {
  faUsers,
  faTasks,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const AppFeatureSection = () => {
  return (
    <section className="relative hidden lg:flex bg-primary h-screen w-3/5 flex-col justify-center items-center shadow-black shadow-lg">
      <div className="w-60 h-40 opacity-10 bg-white absolute top-12 right-0"></div>
      <div className="w-48 h-48 opacity-25 bg-white absolute left-10 bottom-20"></div>
      <div className="w-36 h-36 opacity-25 bg-white absolute top-4 left-72 rounded-full"></div>
      <div className="w-52 h-52 opacity-10 bg-white absolute right-60 rounded-full circle-bottom"></div>
      <div className="arrow-down absolute top-36 left-12"></div>
      <div className="arrow-right absolute bottom-28 right-16"></div>
      <div className="flex item-center justify-center space-x-6">
        <Logo />
        <h1 className="text-white text-center text-6xl pb-10 project-tracker">
          Project Tracker
        </h1>
      </div>
      <div className="flex justify-evenly space-x-10 p-10">
        <AppFeature
          gradient="from-cyan-500 to-cyan-600"
          icon={faUsers}
          title="Collaborate"
        />
        <AppFeature
          gradient="from-cyan-600 to-cyan-700"
          icon={faTasks}
          title="Track Progress"
        />
        <AppFeature
          gradient="from-cyan-700 to-cyan-800"
          icon={faChartPie}
          title="Analyze Projects"
        />
      </div>
    </section>
  );
};

export default AppFeatureSection;
