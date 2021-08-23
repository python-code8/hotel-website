import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Hotel Vassi 
    
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Scroll to='homemain' smooth={true}><Link className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link></Scroll>
            </li>
            <li className='nav-item'>
            <Scroll to='accmain' smooth={true}><Link className='nav-links' onClick={closeMobileMenu}>
                Accommodation
              </Link></Scroll>
            </li>
            <li className='nav-item'>
            <Scroll to='dinmain' smooth={true}><Link className='nav-links' onClick={closeMobileMenu}>
                Dining
              </Link></Scroll>
            </li>

            <li className='nav-item'>
            <Scroll to='banmain' smooth={true}><Link className='nav-links' onClick={closeMobileMenu}>
                Banquet
              </Link></Scroll>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
