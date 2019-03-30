import * as React from 'react';
import './product-item.scss';

const ProductItem = () => (
  <li className="product-item">
    <div className="previewer">
      <img src="https://via.placeholder.com/180x250" alt="product preview" />
    </div>
    <article>
      <h4>Product Title</h4>
      <span>Price</span>
      <button>Add to Cart</button>
    </article>
  </li>
)

export default ProductItem;
