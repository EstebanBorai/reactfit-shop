import * as React from 'react';
import './header.scss';
import ShoppingCart from './ShoppingCart';
import Filter from './Filter';
import IProduct from 'types/IProduct';

const cartItems: Array<IProduct> = [
  {
    id: 'dhewdhewod',
    name: 'The product',
    description: 'Brief desscription',
    price: 10.50
  }
];

const Header = () => (
  <header className="app-header">
    <div className="content">
      <h1>🏃&nbsp;ReactFit</h1>
      <div className="tools">
        <ShoppingCart items={cartItems} />
        <Filter />
      </div>
    </div>
  </header>
);

export default Header;
