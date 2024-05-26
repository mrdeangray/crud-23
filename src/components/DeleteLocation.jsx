import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { LocationContext } from "../context/LocationProvider";
import { AuthContext } from "../context/AuthProvider";

const Msg = styled.p`
  font-size: 24px;
  color: blue;
`;

const DeleteLocation = () => {
  const { id } = useParams();
  const { currUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const { locations, setLocations } = useContext(LocationContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currLocation, setCurrLocation] = useState("");

  useEffect(() => {
    const curr = locations.find((loc) => loc.id === id);
    setCurrLocation(curr);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();

    const newLocations = locations.filter((location) => location.id !== id);

    setLocations(newLocations);

    localStorage.setItem("crud-23-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      navigate("/read");
      setIsUpdating(false);
    }, 2000);
  };


  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>Delete: {currLocation?.name}</h4>

      <button onClick={handleDelete}>Delete: {currLocation?.name} </button>
      {locations.map((location) => {
        return <span key={location.id}>{location.name}, </span>;
      })}
      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default DeleteLocation;
