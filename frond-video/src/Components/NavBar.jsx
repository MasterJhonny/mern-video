import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <NavLink className="nav__item" to="/videos">
        Videos
      </NavLink>
      <NavLink className="nav__item" to="/users">
        Users
      </NavLink>
      <NavLink className="nav__item" to="/view/0">
        Player
      </NavLink>
      <NavLink className="nav__item" to="/new">
        Create New Video
      </NavLink>
      <span className="nav-bg"></span>
    </div>
  );
}

export { NavBar };
