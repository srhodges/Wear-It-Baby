import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
       <div className="footer-bar">
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
    </div>
  )
}

export default Footer
