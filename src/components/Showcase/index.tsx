import * as React from 'react';
import './showcase.scss';
import ProductItem from './ProductItem';
import productsJSON from 'misc/products.json';
import ProductModal from './ProductModal';

const Showcase = () => {
  const [isModalOpen, setModal] = React.useState(false);

  return (
    <React.Fragment>
      {isModalOpen ? <ProductModal onClose={() => setModal(false)} /> : null}
      <ul className="showcase">
        {
          productsJSON && productsJSON.map(product => (
            <ProductItem product={product} key={product.id} />
          ))
        }
      </ul>
    </React.Fragment>
  )
};

export default Showcase;
