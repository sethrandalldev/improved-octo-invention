import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { update } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const InitialRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      fetch("https://fictional-couscous.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.userId) {
            fetch(
              `https://fictional-couscous.herokuapp.com/users/${data.userId}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
                },
              }
            )
              .then((res) => res.json())
              .then((user) => {
                if (user && user.email) {
                  dispatch(update(user));
                  navigate("/projects", { replace: true });
                } else {
                  navigate("/login", { replace: true });
                }
              });
          } else {
            navigate("/login", { replace: true });
          }
        })
        .catch((err) => console.error(err));
    } else {
      navigate("/login", { replace: true });
    }
  }, []);
  return <div></div>;
};

export default InitialRoute;
