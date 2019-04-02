import Modal from "components/lib/Modal";
import * as React from "react";
import IProduct from "types/IProduct";

import "./showcase.scss";

interface IProductModal {
  product: IProduct;
  onClose: Function;
}

const ProductModal = (props: IProductModal) => (
  <Modal title={props.product.name} onClickOutside={props.onClose}>
    <main className="product-preview">
      <div className="image-container">
        <img
          height="auto"
          width="300px"
          src={props.product.image}
          alt="product-preview"
        />
      </div>
      <article>
        <ul>
          <li>Brand: {props.product.brand}</li>
          <li>Price: {props.product.price}$</li>
        </ul>
      </article>
    </main>
  </Modal>
);

export default ProductModal;
