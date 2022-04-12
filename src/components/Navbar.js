import React from "react";
import { Link } from "react-router-dom";
import "../scss/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link to="/">
          <h1>TodayTix</h1>
        </Link>
        <Link to="/theatreShows">
          <h1>Lottery Entry</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
