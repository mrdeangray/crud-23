import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { currUser, handleSignIn, handleSignOut } = useContext(AuthContext);
  return (
    <div>
      <h2>Home</h2>

      {currUser ? (
        <div>
          <Link to={`/read`}>
            <button>Read Locations</button>
          </Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default Home;
