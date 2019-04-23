import { Map as ImmutableMap } from 'immutable';
import * as React from 'react';

import { IShoppingCartItem } from '@types';
import './shopping-cart.scss';

interface IItemListProps {
  items: ImmutableMap<string, IShoppingCartItem>;
}

const ItemList = (props: IItemListProps) => {
  return (
    <div className="cart-items">
      <ol className="item-list">
        {
          props.items && props.items.size > 0 ?
          props.items.map((item) => (
            <li key={item.productId}>{JSON.stringify(item)}</li>
          )).valueSeq().toArray() :
          <li>Your cart is empty</li>
        }
      </ol>
    </div>
  );
};

export default ItemList;
