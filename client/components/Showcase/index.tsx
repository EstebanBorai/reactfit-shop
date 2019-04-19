import * as React from 'react';

import FilterManager from './FilterManager';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import './showcase.scss';

import { IShowcaseDispatchProps, IShowcaseStateProps } from 'containers/Showcase';

type Props = IShowcaseDispatchProps & IShowcaseStateProps;

const Showcase = (props: Props) => {
  const [isModalOpen, setModal] = React.useState(true);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (product) => {
    setModal(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedProduct(null);
  };

  React.useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <React.Fragment>
      <ProductModal isOpen={isModalOpen} product={selectedProduct} onClose={handleCloseModal} />
      <section className="products">
        <FilterManager />
        <ul className="showcase">
          {
            props.products && props.products.valueSeq().map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            )).toArray()
          }
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Showcase;
