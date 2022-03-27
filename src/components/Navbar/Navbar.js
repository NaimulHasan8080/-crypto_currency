import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/mix-image/Logo.png';
import "./Navbar.css";

const Navbar = () => {
 const [buttonState,setButtonState ] = useState(false)
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#info">Token Information</a>
        </li>
        <li>
          <a href="#whitepaper">Whitepaper</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#audits">Audits</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <span className="nav_btn">
        {buttonState ? (
          <Link to="/">
            <button
              onClick={() => setButtonState(!buttonState)}
              className="common_btn"
            >
              Connect
            </button>
          </Link>
        ) : (
          <Link to="/SecondPage">
            <button
              onClick={() => setButtonState(!buttonState)}
              className="common_btn"
            >
              Launch App
            </button>
          </Link>
        )}
      </span>
    </nav>
  );
};

export default Navbar;