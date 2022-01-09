const Textfield = (props) => {
  return (
    <input
      onChange={props.onChange}
      className="bg-slate-100 rounded-md p-2 my-3 w-full"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Textfield;
