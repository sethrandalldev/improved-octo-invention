import AppBar from "./AppBar";

const ProtectedRoute = (props) => {
  return (
    <div>
      <AppBar />
      {props.children}
    </div>
  );
};

export default ProtectedRoute;
