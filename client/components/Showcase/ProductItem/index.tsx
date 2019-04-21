import { IProduct } from '@types';
import AddToCart from 'containers/AddToCart';
import * as React from 'react';

import './product-item.scss';

interface IProductItemProps {
  product: IProduct;
  onClick: Function;
}

const ProductItem = (props: IProductItemProps) => {
  const handleClick = () => {
    props.onClick(props.product);
  };

  return (
  <li className="product-item" onClick={handleClick}>
    <div className="previewer">
      <img
        src={props.product.image}
        alt="product preview"
        height="100%"
        width="auto"
      />
    </div>
    <article>
      <h4 title={props.product.name}>
        {
          props.product.name.length > 20 ?
          `${props.product.name.substr(0, 20)}...` :
          props.product.name
        }
      </h4>
      <span>{props.product.price}&nbsp;<sup>$</sup></span>
      <AddToCart item={props.product} />
    </article>
  </li>
  );
};

export default ProductItem;
