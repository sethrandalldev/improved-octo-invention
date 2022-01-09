import AppFeatureSection from "../components/AppFeatureSection";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="flex overflow-hidden">
      <AppFeatureSection />
      <section className="lg:w-2/5 mx-auto h-screen flex flex-col justify-center p-10">
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
