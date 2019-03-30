import * as React from 'react';
import './header.scss';
import ShoppingCart from './ShoppingCart';
import Filter from './Filter';
import IProduct from 'types/IProduct';

const Header = () => (
  <header className="app-header">
    <div className="content">
      <h1>🏃&nbsp;ReactFit</h1>
      <div className="tools">
        <ShoppingCart />
        <Filter />
      </div>
    </div>
  </header>
);

export default Header;
