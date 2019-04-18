import ColorSelector from 'components/ColorSelector';
import SizeSelector from 'components/SizeSelector';
import * as React from 'react';
import Modal from 'react-modable';
import IProduct from 'types/IProduct';
import './showcase.scss';

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
          </div>
        </main>
      </Modal>
    );
  }

  return null;
};

export default ProductModal;
