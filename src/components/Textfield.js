const Textfield = (props) => {
  return (
    <input
      className="bg-gray-200 rounded-md p-2 my-3 w-full"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Textfield;
