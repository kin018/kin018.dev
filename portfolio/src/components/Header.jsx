import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

function Header() {
  return (
    <header>
      <div>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
