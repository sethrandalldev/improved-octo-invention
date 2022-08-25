import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useGetTicketsByProjectQuery } from "../api/api";

const Project = () => {
  const params = useParams();
  const { tickets, error, isLoading } = useGetTicketsByProjectQuery(params.id);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1>An error has ocurred.</h1>;
  }
  return <h1>Hello</h1>;
};

export default Project;
