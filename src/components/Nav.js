import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/_nav.scss';
import {Squash as Hamburger} from 'hamburger-react'


function NavBar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/home" className="nav-logo">
            <span><img className="logo" src="https://i.postimg.cc/NjwcZkw9/newlogo.png" alt="null"></img></span>
            <span className="icon">
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/videography"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Videography
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/booking"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Splash
              </NavLink>
            </li>
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
              <span className="icon">
                <Hamburger toggled={click} toggle={setClick} />
              </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;