import Textfield from "../components/Textfield";
import TicketComment from "../components/TicketComment";
import Button from "../components/Button";

const Ticket = (props) => {
  return (
    <div className="w-4/5 mx-auto my-2 lg:px-5">
      <h2 className="text-5xl m-2">{props.title}</h2>
      <div className="flex m-2">
        <h1>Status:</h1>
        <select className="bg-gray-200 rounded-lg p-1 mx-2">
          <option>To Do</option>
          <option>In Progress</option>
          <option>For Review</option>
          <option>Done</option>
        </select>
        <h1>Priority:</h1>
        <select className="bg-gray-200 rounded-lg p-1 mx-2">
          <option>None</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <h3 className="text-lg m-2">{props.description}</h3>
      <div className="w-full">
        <h4 className="text-2xl m-2">Comments</h4>
        <div className="flex items-center space-x-10">
          <Textfield type="text" placeholder="Add comment..." />
          <Button
            fitContent={true}
            title="Submit"
            backgroundColor="bg-primary"
            color="text-white"
          />
        </div>
        <div className="flex flex-col">
          <TicketComment />
          <TicketComment />
          <TicketComment />
          <TicketComment />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
