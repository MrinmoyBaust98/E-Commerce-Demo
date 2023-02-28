import React from "react";

import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav-control">
        <ul>
          <li>
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/productReview">
              OderReview
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/inventory">
              ManageInventory
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
