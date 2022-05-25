import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

class Nav extends React.Component {

  render() {
    return (
      <div className="topnav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} >Home</NavLink>
        <NavLink to="/todo" className={({ isActive }) => (isActive ? "active" : "")} >Todo</NavLink>
        <NavLink to="/listUser" className={({ isActive }) => (isActive ? "active" : "")}>ListUserAPI</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} >About</NavLink>
      </div>
    )
  }

}

export default Nav;