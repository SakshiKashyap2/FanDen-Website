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
      <div className="logo">
        <img src={fan} alt="" />
      </div>

      <div>
        <ul id="navbar" className={clicked ? "active" : ""}>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/">Skills</Link>
          </li>

          <li>
            <Link to="/">News</Link>
          </li>

          <li>
            <Link to="/">Projects</Link>
          </li>

          <li>
            <Link to="/login">
              <button className='btn'>LogIn</button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button className='btn'>Signup</button>
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
