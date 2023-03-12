import React from "react";

import "./Header.css";
import { NavLink } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
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
          <li>
            {user.email ? (
              <button onClick={logOut}> Log Out</button>
            ) : (
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
