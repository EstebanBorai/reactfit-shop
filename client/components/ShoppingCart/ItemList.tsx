import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import ProductCartItem from './ProductCartItem';

import { IShoppingCart } from 'types/index';
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
          <li id="cart-empty-message">
            <span>
              <FontAwesomeIcon icon={faSadTear} />
            </span>
            <strong>Umm.. This looks empty! Maybe you can add something to see what happens!</strong>
          </li>
        }
      </ol>
      {
        props.items && props.items.size === 0 ?
        null :
        <span id="shopping-cart-total">Total: {Number(props.total).toFixed(2)}</span>
      }
    </div>
  );
};

export default ItemList;
