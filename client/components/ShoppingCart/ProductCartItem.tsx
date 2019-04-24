import * as React from 'react';

interface IProductCartItem {
  productId: string;
  name: string;
  price: number;
}

const ProductCartItem = (props: IProductCartItem) => {
  return (
    <li key={props.productId} className="product-cart-item">
      <img 
        src="https://via.placeholder.com/80"
        height="80px"
        width="80px"
        alt="product-preview"
      />
      <article>
        <h5>{props.name}</h5>
        <span>{props.price}&nbsp;$</span>
      </article>
    </li>
  );
};

export default ProductCartItem;
