import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Props from './@types/IAddToCart';
import './add-to-cart.scss';

const AddToCart = (props: Props) => (
  <button onClick={() => props.onClick()} type="button" className="add-to-cart">
    <FontAwesomeIcon icon={faShoppingCart} />&nbsp;Add to Cart
  </button>
);

export default AddToCart;
