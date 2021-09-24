import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
       <div className="footer-bar">
      <Link to="/">
        
      </Link>
      <ul className="list">
        <li>
          <Link to="/"><i className="fas fa-home"/></Link>
        </li>
        <li>
          <Link to="/inventory"><i className="fas fa-tshirt"/></Link>
        </li>
        <li>
          <Link to="/add"><i className="fas fa-plus"/></Link>
        </li>
        <li>
          <Link to="/contact"><i className="fas fa-handshake"/></Link>
        </li>
        <li>
          <Link to="/about"><i className="fas fa-question"/></Link>
        </li>
        <li>
            <Link to="/inventoryresults"><i className="fas fa-search"/></Link>
          </li>
      </ul>
    </div>
  )
}

export default Footer
