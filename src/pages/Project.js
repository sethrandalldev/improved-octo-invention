import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {
  useGetTicketsByProjectQuery,
  useGetProjectByIdQuery,
} from "../api/api";
import Button from "../components/Button";
import TicketsTable from "../components/TicketsTable";

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
    <div className="w-full lg:w-4/5 lg:mx-auto m-5">
      <h1 className="text-5xl text-primary">{project.title}</h1>
      <h1>{project.description}</h1>
      <Button
        title="Create Ticket"
        color="text-white"
        backgroundColor="bg-primary"
        type="button"
        fitContent
      />
      <TicketsTable />
    </div>
  ) : (
    <Loader />
  );
};

export default Project;
