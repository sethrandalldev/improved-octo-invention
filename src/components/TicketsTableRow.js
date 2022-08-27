import { useNavigate } from "react-router-dom";

const TicketsTableRow = () => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate("/tickets/hello")}
      className="hover:bg-gray-200 hover:cursor-pointer text-center"
    >
      <td className="p-2">Project Tracker</td>
      <td className="p-2 ">Finish Tickets Page</td>
      <td className="p-2">Low</td>
      <td className="p-2">In Progress</td>
    </tr>
  );
};

export default TicketsTableRow;
