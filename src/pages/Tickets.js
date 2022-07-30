import TicketsTable from "../components/TicketsTable";

const Tickets = () => {
  return (
    <div className="w-3/4">
      <h1 className="text-5xl m-2 text-primary">My Tickets</h1>
      <TicketsTable />
    </div>
  );
};

export default Tickets;
