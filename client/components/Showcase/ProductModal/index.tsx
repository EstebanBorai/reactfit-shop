import { IProduct } from '@types';
import ColorSelector from 'components/ColorSelector';
import SizeSelector from 'components/SizeSelector';
import AddToCart from 'containers/AddToCart';
import * as React from 'react';
import Modal from 'react-modable';
import './product-modal.scss';

interface IProductModal {
  isOpen: boolean;
  product: IProduct;
  onClose: Function;
}

const ProductModal = (props: IProductModal) => {
  if (props.product) {
    return (
      <Modal isActive={props.isOpen} onClose={props.onClose} bodyClassName="product-modal-container">
        <main className="product-modal">
          <div className="image-container">
            <img
              src={props.product.image}
              alt={props.product.name}
            />
          </div>
          <div className="details-container">
            <h3>{props.product.name}</h3>
            <span className="brand-stripe">by&nbsp;<strong>{props.product.brand}</strong></span>
            <span className="product-rating">Rating: {props.product.rating}/5</span>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Rerum officia est veniam consequuntur tempore optio, animi
              hic doloribus repellendus inventore explicabo? Iste similique sint
              sed dolores veritatis distinctio est voluptatibus.
            </p>
            <ol className="product-properties">
              <li className="property">
                <span>Size</span>
                <SizeSelector sizes={props.product.sizes} />
              </li>
              <li className="property">
                <span>Color</span>
                <ColorSelector colors={props.product.colors} />
              </li>
            </ol>
            <footer>
              <AddToCart item={props.product} />
            </footer>
          </div>
        </main>
      </Modal>
    );
  }

  return null;
};

export default ProductModal;
