import SideBar from "./SideBar";

const ProtectedRoute = (props) => {
  return (
    <div className="flex h-screen">
      <div className="w-full bg-white">{props.children}</div>
    </div>
  );
};

export default ProtectedRoute;
