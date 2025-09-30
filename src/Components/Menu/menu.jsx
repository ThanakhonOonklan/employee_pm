import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Deparetment">Department</Link></li>
        <li><Link to="/Employee">Employee</Link></li>
        <li><Link to="/Position">Position</Link></li>
        <li><Link to="/Salary">Salary</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
