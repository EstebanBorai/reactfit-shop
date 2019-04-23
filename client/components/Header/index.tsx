import ShoppingCart from 'containers/ShoppingCart';
import * as React from 'react';
import './header.scss';

const Header = () => (
  <header className="app-header">
    <h1>🏃&nbsp;ReactFit</h1>
    <div>
      <ShoppingCart />
    </div>
  </header>
);

export default Header;
