import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <h1 className="text-xl">Portex.Try</h1>
    <div>
      <Link to="/" className="px-4">Home</Link>
      <Link to="/about" className="px-4">About</Link>
      <Link to="/products" className="px-4">Products</Link>
      <Link to="/contact" className="px-4">Contact</Link>
    </div>
  </nav>
);

export default Navbar;