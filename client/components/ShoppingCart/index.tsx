import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IShoppingCart } from 'types/index';

import ItemList from './ItemList';
import './shopping-cart.scss';

const ShoppingCart = (props: IShoppingCart) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
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
