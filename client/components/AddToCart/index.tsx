import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IAddToCartDispatchProps } from 'containers/AddToCart';
import * as React from 'react';
import IAddToCart from './@types/IAddToCart';
import './add-to-cart.scss';

type Props = IAddToCart & IAddToCartDispatchProps;

const AddToCart = (props: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    props.onAddToCart(props.item);
  };

  return (
    <button onClick={handleClick} type="button" className="add-to-cart">
      <FontAwesomeIcon icon={faShoppingCart} />&nbsp;Add to Cart
    </button>
  );
};

export default AddToCart;
