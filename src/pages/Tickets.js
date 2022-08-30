import { useGetTicketsByProjectQuery } from "../api/api";
import TicketsTable from "../components/TicketsTable";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Tickets = () => {
  const params = useParams();
  const {
    data: ticketsData,
    error,
    isLoading,
  } = useGetTicketsByProjectQuery(params.id);
  return error ? (
    <h1>An error has ocurred.</h1>
  ) : isLoading ? (
    <Loader />
  ) : (
    <div className="w-3/4">
      <h1 className="text-5xl m-2 text-primary">My Tickets</h1>
      <TicketsTable data={ticketsData} />
    </div>
  );
};

export default Tickets;
