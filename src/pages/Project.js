import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {
  useGetTicketsByProjectQuery,
  useGetProjectByIdQuery,
} from "../api/api";

const Project = () => {
  const params = useParams();
  const {
    data: tickets,
    error: ticketError,
    isLoading: ticketLoading,
  } = useGetTicketsByProjectQuery(params.id);
  const {
    data: project,
    erro: projectError,
    isLoading: projectLoading,
  } = useGetProjectByIdQuery(params.id);
  return ticketLoading || projectLoading ? (
    <Loader />
  ) : ticketError || projectError ? (
    <h1>An error has ocurred.</h1>
  ) : tickets && project ? (
    <div>
      <h1>{project.title}</h1>
      <h1>{project.description}</h1>
    </div>
  ) : (
    <Loader />
  );
};

export default Project;
