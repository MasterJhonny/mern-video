import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="nav">
      {isAuthenticated ? (
        <>
          <NavLink className="nav__item" to="/videos">
            Videos
          </NavLink>
          <NavLink className="nav__item" to="/profile">
            Profile
          </NavLink>
          <NavLink className="nav__item" to="/view/0">
            Player
          </NavLink>
          <NavLink className="nav__item" to="/new/0">
            Create New Video
          </NavLink>
          <NavLink className="nav__item" to="/logout">
            Logout
          </NavLink>
        </>
      ) : (
        <NavLink className="nav__item" to="/login">
          Login
        </NavLink>
      )}
      <span className="nav-bg"></span>
    </div>
  );
}

export { NavBar };
