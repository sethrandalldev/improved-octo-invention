const Ticket = (props) => {
  return (
    <div>
      <h2 className="text-5xl m-2">{props.title}</h2>
      <h3 className="text-2xl m-2">{props.description}</h3>
    </div>
  );
};

export default Ticket;
