import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          boxSizing: "border-box",
          backgroundColor: "grey",
          listStyleType: "none",
          padding: "20px",
        }}
      >
        {" "}
        <li>
          <Link to="/">Add Employees</Link>{" "}
        </li>
        <li>
          <Link to="/addcompanies">Add Companies</Link>
        </li>
        <li>
          <Link to="/showcompanies"> Show All Companies</Link>
        </li>
        <li>
          {" "}
          <Link to="/showemployees"> Show All Employees</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
