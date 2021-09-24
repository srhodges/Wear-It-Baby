import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
// import InventoryResults from './InventoryResults';


export default function Navbar() {

  const [search, setSearch] = useState("");


  return (
    <div className="navbar">
      <nav className="navbar-logo">
        <Link to="/">
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
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/inventoryresults">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

