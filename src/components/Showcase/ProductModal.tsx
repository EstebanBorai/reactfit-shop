import * as React from 'react';
import './showcase.scss';
import Modal from 'components/lib/Modal';

interface IProductModal {
  onClose: Function;
}

const ProductModal = (props: IProductModal) => (
  <Modal title="Product Name" onClickOutside={props.onClose}>
    <main>
      
    </main>
  </Modal>
)

export default ProductModal;
