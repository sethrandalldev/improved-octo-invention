import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import SideBar from "./SideBar";

const ProtectedRoute = (props) => {
  const user = useSelector((state) => state.user);
  const token = window.localStorage.getItem("token");

  return user.email && token ? (
    <div className="flex h-screen">
      <ProfileIcon />
      <SideBar />
      <div className="w-full bg-white p-3">{props.children}</div>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoute;
