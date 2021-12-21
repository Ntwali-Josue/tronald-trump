import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const NavBar = () => (
  <>
    <header className="nav-header">
      <img alt="Mobile menu button" src="https://img.icons8.com/material-rounded/24/ffffff/menu--v1.png" />
      <NavLink to="/" className="nav-link">
        <h1 className="title">Coin Cap</h1>
      </NavLink>
      <div className="nav-icon">
        <img alt="config button" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-gear-settings-those-icons-fill-those-icons-1.png" />
      </div>
    </header>
  </>
);

export default NavBar;
