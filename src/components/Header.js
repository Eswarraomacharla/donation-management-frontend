import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Donation Platform</Link>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <li className="dropdown">
            <a href="#!" className="dropdown-link">Login</a>
            <div className="dropdown-content">
              <Link to="/adminlogin">Admin</Link><br/>
              <Link to="/donordashboard">Donor </Link><br/>
              <Link to="/recipientdashboard">Recipient </Link><br/>
              <Link to="/logisticscoordinator">Loogistics </Link>

            </div>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
