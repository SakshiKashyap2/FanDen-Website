import React, { useState } from 'react';
import './navbar.css';
import fan from './assests/logo2.png';
import { Link } from 'react-router-dom';
import Main from './Store/Main'
import CartPage from './Store/CartPage';
import { useNavigate } from 'react-router-dom';

const Nav = ({ cartItems }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };


  const getTotalItem = () => {
    if (!Array.isArray(cartItems)) return 0;

    let totalItems = 0;
    for (const item of cartItems) {
      totalItems += item.quantity;
    }
    return totalItems;
  };

  const navigate = useNavigate();

  const redirectToCart = () => {
    navigate('/CartPage');
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
            <a href="/aboutus">About Us</a>
          </li>

          <li>
            <a href="/sports">Sports Articles</a>
          </li>

          <li>
            <a href="/events">Past Events</a>
          </li>

          <li>
            <Link to="/login">
              <button className='btn'>LogIn</button>
            </Link>
          </li>

           <li>
          <button className="btn" onClick={redirectToCart}>
          <h2><i class="fa-solid fa-cart-shopping"></i> {getTotalItem()}</h2>
          </button>
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
