import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav">
            <NavLink className="nav__item" to="/">Home</NavLink>
            <NavLink className="nav__item" to="/videos">Videos</NavLink>
            <NavLink className="nav__item" to="/users">Users</NavLink>
            <NavLink className="nav__item" to="/new">Create New Video</NavLink>
        </div>
    );
}

export {NavBar};