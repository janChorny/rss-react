import React from 'react';
import './Preloader.css';

export function Preloader() {
  return (
    <div className="preloader__container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
