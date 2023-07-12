import React, { useState } from 'react';
import './navbar.css';
import fan from './assests/FanDen.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <Link to='/'>
      <div className="logo">
        <img src={fan} alt="" />
      </div>
      </Link>

      <div>
        <ul id="navbar" className={clicked ? "active" : ""}>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>

          <li>
            <a href="/">About Us</a>
          </li>

          <li>
            <a href="/">Sports Articles</a>
          </li>

          <li>
            <a href="/events">Past Events</a>
          </li>

          <li>
            <Link to="/login">
              <button className='btn'>LogIn</button>
            </Link>
          </li>
          
        </ul>
      </div>

      <div id="mobile" onClick={handleClick}>
        <i
          id="bar"
          className={clicked ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
  );
};

export default Nav;
