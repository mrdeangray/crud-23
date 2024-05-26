import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Header = ({ className }) => {
  const { currUser, handleSignIn,handleSignOut } = useContext(AuthContext);
  return (
    <nav className={className}>
      <h3>CRUD-23</h3>
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
      {
        currUser?
<button onClick={handleSignOut}>{currUser?.displayName}</button>
:
<button onClick={handleSignIn}>Sign In</button>
      }
      
    </nav>
  );
};

export default Header;
