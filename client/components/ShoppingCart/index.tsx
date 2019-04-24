import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IShoppingCart } from 'types';
import * as React from 'react';

import ItemList from './ItemList';
import './shopping-cart.scss';

const ShoppingCart = (props: IShoppingCart) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    if (props.items.size > 0) {
      setOpen(!isOpen);
    }
  };

  return (
    <div className="shopping-cart">
      {
        <React.Fragment>
          <button type="button" className={`cart-button${isOpen ? ' active' : ''}`} onClick={handleClick}>
            {props.items.size}&nbsp;<FontAwesomeIcon icon={faShoppingCart} />
          </button>
          {isOpen ? <ItemList items={props.items} total={props.total} /> : null}
        </React.Fragment>
      }
    </div>
  );
};

export default ShoppingCart;
