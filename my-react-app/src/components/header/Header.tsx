import React from 'react';
import { Component } from 'react';
import { Navigation } from '../navigation/Navigation';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navigation />
      </header>
    );
  }
}
