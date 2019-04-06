import * as React from 'react';
import IProduct from 'types/IProduct';

import ItemList from './ItemList';
import './shopping-cart.scss';

interface IShoppingCartProps {
  items?: IProduct[];
}

const ShoppingCart = (props: IShoppingCartProps) => {
  const [isOpen, setOpen] = React.useState(false);

  const toggleCart = () => setOpen(!isOpen);

  const carButtonLabel = `Cart ${props.items ? props.items.length : 0}`;
  return (
    <React.Fragment>
      {
        isOpen ?
        <React.Fragment>
          <button className="active" onClick={() => toggleCart()}>{carButtonLabel}</button>
          <ItemList items={props.items} />
        </React.Fragment> :
        <button onClick={() => toggleCart()}>{carButtonLabel}</button>
      }
    </React.Fragment>
  );
};

export default ShoppingCart;
