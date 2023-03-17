import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <span>
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}
