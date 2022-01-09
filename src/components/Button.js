const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`rounded-md my-2 p-3 ${
        props.fitContent ? "w-fit" : "w-full"
      } ${props.backgroundColor} ${props.color} hover:opacity-95`}
    >
      {props.title}
    </button>
  );
};

export default Button;
