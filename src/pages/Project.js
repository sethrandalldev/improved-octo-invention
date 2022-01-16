import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const Project = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {});

  console.log(params);
  return isLoaded ? <h1>Hello</h1> : <Loader />;
};

export default Project;
