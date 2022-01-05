import { useState, useEffect } from "react";
import AppBar from "./AppBar";
import { useLocation } from "react-router-dom";
import WorkspaceMenu from "./WorkspaceMenu";

const ProtectedRoute = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  });

  return (
    <div>
      <AppBar />
      {showMenu ? (
        <div className="flex">
          <WorkspaceMenu />
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default ProtectedRoute;
