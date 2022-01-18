import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  return user ? (
    <div className="flex h-screen">
      <div className="w-full bg-white">{props.children}</div>
    </div>
  ) : (
    navigate("/login", { replace: true })
  );
};

export default ProtectedRoute;
