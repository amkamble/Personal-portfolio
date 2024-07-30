import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the state of the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the navbar
  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo">
          {/* <img src="logo.png" alt="Logo" /> */}
          Amol Kamble
        </a>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="menu-icon__line"></div>
          <div className="menu-icon__line"></div>
          <div className="menu-icon__line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNavbar} // Close navbar on link click
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNavbar} // Close navbar on link click
              className="nav-link"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNavbar} // Close navbar on link click
              className="nav-link"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNavbar} // Close navbar on link click
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNavbar} // Close navbar on link click
              className="nav-link"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNavbar} // Close navbar on link click
              className="hire-btn"
            >
              <ion-icon name="bag"></ion-icon> Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
