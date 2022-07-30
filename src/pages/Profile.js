import Textfield from "../components/Textfield";
import Button from "../components/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../slices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state);
    return state.user.user;
  });
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const date = new Date(Date.parse(user.joined)).toLocaleDateString({
    month: "number",
    year: "number",
    day: "number",
  });
  return (
    <div className="w-72 mx-auto my-20">
      <h3 className="py-5 text-3xl">{`${user.firstName} ${user.lastName}`}</h3>
      <h5 className="py-2 text-2xl">Member Since:&ensp;{date}</h5>
      <label>First Name</label>
      <Textfield
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name</label>
      <Textfield
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Email</label>
      <Textfield
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        onClick={() => {
          fetch(`https://fictional-couscous.herokuapp.com/users/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              firstName: firstName,
              lastName: lastName,
            }),
          })
            .then((response) => response.json())
            .then((updatedUser) => {
              dispatch(updateUser(updatedUser));
            });
        }}
        title="Save"
        backgroundColor="bg-secondary"
        color="text-white"
      />
    </div>
  );
};

export default Profile;
