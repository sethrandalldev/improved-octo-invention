import { useEffect } from "react";

const Workspaces = () => {
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return <h1>Hello</h1>;
};

export default Workspaces;
