import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        className="navigation-link"
        to="/"
        style={({ isActive }) =>
          isActive
            ? {
                color: 'white',
              }
            : {}
        }
      >
        Products
      </NavLink>
      <NavLink
        className="navigation-link"
        to="/about"
        style={({ isActive }) =>
          isActive
            ? {
                color: 'white',
              }
            : {}
        }
      >
        About
      </NavLink>
      <NavLink
        className="navigation-link"
        to="/forms"
        style={({ isActive }) =>
          isActive
            ? {
                color: 'white',
              }
            : {}
        }
      >
        Forms
      </NavLink>
    </nav>
  );
}
