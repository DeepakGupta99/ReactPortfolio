import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <span className="footer__logo">
        <span className="footer__bracket">&lt;</span>
        Dev<span className="footer__slash">/</span>Portfolio
        <span className="footer__bracket">&gt;</span>
      </span>

      <p className="footer__copy">
        Designed &amp; built with{' '}
        <span className="footer__heart">♥</span>{' '}
        by <span className="footer__name">Deepak Gupta</span>
      </p>

      <p className="footer__tech">
        React · HTML · CSS · JavaScript
      </p>
    </div>
  </footer>
);

export default Footer;
