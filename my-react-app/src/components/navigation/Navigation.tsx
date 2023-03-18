import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink
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
      </nav>
    );
  }
}
