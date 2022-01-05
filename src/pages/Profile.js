import Textfield from "../components/Textfield";
import Button from "../components/Button";

const Profile = () => {
  return (
    <div className="w-72 mx-auto my-20">
      <h3 className="py-5 text-3xl">Profile</h3>
      <label>First Name</label>
      <Textfield type="text" />
      <label>Last Name</label>
      <Textfield type="text" />
      <label>Email</label>
      <Textfield type="email" />
      <Button title="Save" backgroundColor="bg-secondary" color="text-white" />
    </div>
  );
};

export default Profile;
