import Textfield from "../components/Textfield";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { add } from "../slices/projectsSlice";
import { createProject } from "../api/api";

const ProjectModal = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements[0].value;
    const description = e.target.elements[1].value;

    const project = createProject(title, description);
    console.log(project);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <Textfield
        type="text"
        name="title"
        // value={firstName}
        // onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Description</label>
      <Textfield
        type="text"
        name="description"
        // value={firstName}
        // onChange={(e) => setFirstName(e.target.value)}
      />
      <Button
        // onClick={() => {
        //   fetch(`https://fictional-couscous.herokuapp.com/users/${user.id}`, {
        //     method: "PATCH",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       email: email,
        //       firstName: firstName,
        //       lastName: lastName,
        //     }),
        //   })
        //     .then((response) => response.json())
        //     .then((updatedUser) => {
        //       // dispatch(update(updatedUser));
        //     });
        // }}
        title="Save"
        backgroundColor="bg-secondary"
        color="text-white"
        type="submit"
      />
    </form>
  );
};

export default ProjectModal;
