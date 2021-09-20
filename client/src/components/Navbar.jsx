import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (

    <nav className="navbar">
      <Link to="/">
        <h1>Wear It, Baby!</h1>
      </Link>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}


