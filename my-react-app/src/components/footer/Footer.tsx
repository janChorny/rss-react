import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copy">&copy; 2023</div>
        <div className="footer__link">
          <a className="footer__link-address" href="https://github.com/janChorny">
            Visit me on Github
          </a>
        </div>
        <div className="footer__logo">
          <a href="https://rs.school/react/">
            <img src="https://rs.school/images/rs_school.svg" alt="logo" width="100" height="70" />
          </a>
        </div>
      </div>
    </footer>
  );
}
