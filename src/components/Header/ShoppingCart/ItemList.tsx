import * as React from 'react';
import './shopping-cart.scss';
import IProduct from 'types/IProduct';

interface IItemListProps {
  items: Array<IProduct>;
}

const ItemList = (props: IItemListProps) => {
  return (
    <div className="cart-items">
      <ol>
        {
          props.items && props.items.length > 0 ?
          props.items.map((item) => (
            <li key={item.id}>
              Test
            </li>
          )) :
          <li>
            Your cart is empty.
          </li>
        }
      </ol>
      <em>10.30</em>
    </div>
  );
}

export default ItemList;
