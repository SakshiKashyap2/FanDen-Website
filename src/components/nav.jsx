import React, { useState } from 'react';
import './navbar.css';
import fan from './assests/FanDen.jpg';

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
            <a className="active" href="index.html">
              Home
            </a>
          </li>

          <li>
            <a href="index.html">Skills</a>
          </li>

          <li>
            <a href="index.html">News</a>
          </li>

          <li>
            <a href="index.html">Projects</a>
          </li>

          <li>
            <a href="index.html">
              <button className='btn'>LogIn</button>
            </a>
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
