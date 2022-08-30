import TicketsTableRow from "./TicketsTableRow";

const TicketsTable = (props) => {
  console.log(props);
  return (
    <table className="my-10 mx-2 w-full">
      <thead className="bg-secondary">
        <tr className="text-white">
          <th>Project</th>
          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((ticket) => (
          <TicketsTableRow ticket={ticket} />
        ))} */}
      </tbody>
    </table>
  );
};

export default TicketsTable;
