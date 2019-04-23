import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IShoppingCartItem } from '@types';
import { Map as ImmutableMap } from 'immutable';
import * as React from 'react';

import ItemList from './ItemList';
import './shopping-cart.scss';

interface IShoppingCartProps {
  items?: ImmutableMap<string, IShoppingCartItem>;
}

const ShoppingCart = (props: IShoppingCartProps) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    if (props.items.size > 0) {
      setOpen(!isOpen);
    }
  }

  const carButtonLabel = props.items.size > 0 ? `Items ${props.items.size}` : 'No Items';
  return (
    <div className="shopping-cart">
      {
        <React.Fragment>
          <button type="button" className={`cart-button${isOpen ? ' active' : ''}`} onClick={handleClick}>
            <FontAwesomeIcon icon={faShoppingCart} />&nbsp;{carButtonLabel}
          </button>
          {isOpen ? <ItemList items={props.items} /> : null}
        </React.Fragment>
      }
    </div>
  );
};

export default ShoppingCart;
