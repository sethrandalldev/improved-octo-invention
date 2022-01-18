import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { getTicketsByProject } from "../api/api";

const Project = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    const tickets = getTicketsByProject(params.id);
    console.log(tickets);
  }, []);

  return isLoaded ? <h1>Hello</h1> : <Loader />;
};

export default Project;
