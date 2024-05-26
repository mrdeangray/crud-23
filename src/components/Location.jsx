import React from "react";
import { Link } from "react-router-dom";

const Location = ({ location }) => {
  // localStorage.clear();
  return (
    <div className="box">
      <span>{location.name}</span>
      <span>{location.score}</span>
      <span>{location.user?.displayName}</span>
      <span className="date">{location.createdOn.toLocaleString("en-US")}</span>
      <Link to={`/update/${location.id}`}>Update</Link>
      <Link to={`/delete/${location.id}`}>Delete</Link>
    </div>
  );
};

export default Location;
