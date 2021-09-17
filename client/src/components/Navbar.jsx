import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {

  const [Click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!Click);
  }

  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" >
          <img src="/" alt="Wear It, Baby!" />;
          </Link>
          <ul className={Click ? 'active-navbar' : 'reg-navbar'}>
            <li className='nav-item'>
              <Link to="/" className='nav-link' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/inventory" className='nav-link' onClick={closeMenu}>
                Inventory
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/add" className='nav-link' onClick={closeMenu}>
                Add
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact" className='nav-link' onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar