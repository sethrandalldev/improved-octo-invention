import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  return user ? (
    <div className="flex h-screen">
      <ProfileIcon />
      <div className="w-full bg-white">{props.children}</div>
    </div>
  ) : (
    navigate("/login", { replace: true })
  );
};

export default ProtectedRoute;
