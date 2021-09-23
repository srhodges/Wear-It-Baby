import { Link } from 'react-router-dom';
import React from 'react';
// import { useState } from 'react';
// import Inventory from './Inventory';

export default function Navbar() {

  // const [search, setSearch] = useState("")
  // const searchResults = { Inventory }


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
        </ul>
        {/* <input type="text" placeholder="Search Wear It, Baby!" onChange={e => {setSearch(e.target.value)} }/> */}
      </nav>
    </div>
  )
}