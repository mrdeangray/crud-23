import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { LocationContext } from "../context/LocationProvider";
import { AuthContext } from "../context/AuthProvider";

const Input = styled.input`
  font-size: 24px;
  border: 3px solid green;
  border-radius: 20px;
`;

const Msg = styled.p`
  font-size: 24px;
  color: blue;
`;

const UpdateLocation = () => {
  const { id } = useParams();
  const { currUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { locations, setLocations } = useContext(LocationContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currLocation, setCurrLocation] = useState("");

  useEffect(() => {
    const curr = locations.find((loc) => loc.id === id);
    setCurrLocation(curr);
    setInputValue(curr.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

   


    const newLocations = locations.map((location) => {
      if (location.id === id) {
        location.name = inputValue;
      }
      return location;
    });



    
    setLocations(newLocations);
    setInputValue("");
    localStorage.setItem("crud-23-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      navigate("/read");
      setIsUpdating(false);
    }, 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>Update: {currLocation?.name}</h4>
      {
        <form onSubmit={handleSubmit}>
          <Input autoFocus value={inputValue} onChange={handleChange} />
        </form>
      }
      {locations.map((location) => {
        return <span key={location.id}>{location.name},</span>;
      })}
      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default UpdateLocation;
