import * as React from 'react';
import ProductCartItem from './ProductCartItem';

import { IShoppingCart } from 'types';
import './shopping-cart.scss';

const ItemList = (props: IShoppingCart) => {
  return (
    <div className="cart-items">
      <ol className="item-list">
        {
          props.items && props.items.size > 0 ?
          props.items.map((item) => (
            <ProductCartItem
              key={item.productId}
              name="TestName"
              price={10}
              productId={item.productId}
            />
          )).valueSeq().toArray() :
          <li>Your cart is empty</li>
        }
      </ol>
      <span id="shopping-cart-total">Total: {Number(props.total).toFixed(2)}</span>
    </div>
  );
};

export default ItemList;
