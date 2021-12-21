import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
  <>
    <header className="nav-header">
      <img alt="Mobile menu button" src="https://img.icons8.com/material-rounded/24/ffffff/menu--v1.png" />
      <NavLink to="/">
        <h1 className="nav-title">Trump</h1>
      </NavLink>
      <div className="nav-icon">
        <img alt="config button" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-gear-settings-those-icons-fill-those-icons-1.png" />
      </div>
    </header>
  </>
);

export default NavBar;
