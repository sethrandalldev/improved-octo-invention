import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { updateUser } from "../slices/userSlice";

const ProfileIcon = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <FontAwesomeIcon
        onClick={() => setIsOpen(!isOpen)}
        size="3x"
        icon={faUserCircle}
        className="absolute right-10 top-5 text-primary rounded-full cursor-pointer"
      />
      {isOpen && (
        <div className="flex flex-col absolute top-20 right-10 bg-primary rounded-lg text-white py-2 w-28 shadow-lg">
          <Link
            onClick={() => setIsOpen(false)}
            to="/profile"
            className="hover:bg-white/30 p-2"
          >
            View Profile
          </Link>
          <p
            onClick={() => {
              window.localStorage.removeItem("token");
              window.localStorage.removeItem("persist:root");
              dispatch(updateUser(null));
              navigate("/login", { replace: true });
            }}
            className="hover:bg-white/30 p-2 cursor-pointer"
          >
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
