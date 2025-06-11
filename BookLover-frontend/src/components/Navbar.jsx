
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#fda085" }}>
    <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>Home</Link>
    <Link to="/login" style={{ color: "#fff" }}>Login</Link>
  </nav>
);

export default Navbar;