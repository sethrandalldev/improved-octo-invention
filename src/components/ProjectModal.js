import Textfield from "../components/Textfield";
import Button from "../components/Button";
import { useCreateProjectMutation } from "../api/api";

const ProjectModal = () => {
  const [createProject, result] = useCreateProjectMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements[0].value;
    const description = e.target.elements[1].value;

    const project = createProject({ title, description });
    console.log(project);
  };
  return (
    <div className="bg-gray h-screen w-screen absolute inset-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-1/2 h-1/2 top-1/2 right-1/2"
      >
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
    </div>
  );
};

export default ProjectModal;
