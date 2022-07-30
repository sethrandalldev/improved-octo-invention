import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import SideBar from "./SideBar";
import { add } from "../slices/projectsSlice";

const ProtectedRoute = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    user &&
      token &&
      fetch("https://fictional-couscous.herokuapp.com/projects", {
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((projects) => {
          console.log(projects);
          dispatch(add(projects));
          props.setProject(projects);
        });
  }, []);

  return user && token ? (
    <div className="flex h-screen">
      <ProfileIcon />
      <SideBar projects={props.projects} />
      <div className="w-full bg-white p-3">{props.children}</div>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoute;
