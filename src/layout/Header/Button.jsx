import React from "react";
import { NavLink } from "react-router-dom";

function Button(props) {
  return (
    <li className="whitespace-nowrap">
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? "navlink_active" : "navlink")}
      >
        {props.content}
      </NavLink>
    </li>
  );
}

export default Button;
