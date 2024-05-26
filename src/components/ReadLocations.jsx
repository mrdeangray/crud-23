import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LocationContext } from "../context/LocationProvider";
import Location from "./Location";
import styled from "styled-components";

const Input = styled.input`
  font-size: 24px;
  border: 3px solid green;
  border-radius: 20px;
`;

const ReadLocations = () => {
  const { locations } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(undefined);

  const sortOptions = {
    ascending: (a, b) => a.name.localeCompare(b.name),
    descending: (a, b) => b.name.localeCompare(a.name),
    score: (a, b) => a.score - b.score,
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <form onChange={handleSortChange}>
        <input type="radio" name="sort_order" value="ascending" />
        <input type="radio" name="sort_order" value="descending" />
        <input type="radio" name="sort_order" value="score" />
      </form>
      <h4>ReadLocations</h4>

      {
        <form>
          <Input autoFocus value={searchTerm} onChange={handleChange} />
        </form>
      }

      {locations
        ?.filter((elem) => elem.name.includes(searchTerm))
        .sort(sortOptions[sortBy])
        .map((location) => {
          return <Location key={location.id} location={location} />;
        })}

      <Link to={`/create`}>
        <button>Create Location</button>
      </Link>
    </div>
  );
};

export default ReadLocations;
