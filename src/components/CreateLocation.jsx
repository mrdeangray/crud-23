import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LocationContext } from "../context/LocationProvider";
import { v4 as uuid } from "uuid";
import axios from "axios";
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

const CreateLocation = () => {
  const { currUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { locations, setLocations } = useContext(LocationContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const location = {};
    location.id = uuid();
    location.user = currUser;
    location.createdOn = new Date();
    location.name = inputValue;
    try {
      const { data } = await axios(
        `https://api.github.com/users/${location.name}`
      );
      location.score = data.public_repos;
    } catch (error) {}

    const newLocations = [...locations, location];
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
      <h4>Create</h4>
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

export default CreateLocation;
