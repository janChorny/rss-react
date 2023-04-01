import { GeneralState } from 'models/models';
import React from 'react';
import { Navigation } from '../navigation/Navigation';
import './Header.css';

export function Header(props: GeneralState) {
  const { pageTitle } = props;
  return (
    <header className="header">
      <Navigation />
      <h5 className="header__current">Current: {pageTitle}</h5>
    </header>
  );
}
