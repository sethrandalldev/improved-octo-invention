const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`rounded-md my-2 p-3 w-full ${props.backgroundColor} ${props.color} hover:opacity-75`}
    >
      {props.title}
    </button>
  );
};

export default Button;
