import * as React from 'react';
import './showcase.scss';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import IProduct from 'types/IProduct';

interface IShowcaseProps {
  products: Array<IProduct>
}

const Showcase = (props: IShowcaseProps) => {
  const [isModalOpen, setModal] = React.useState(false);

  return (
    <React.Fragment>
      {isModalOpen ? <ProductModal onClose={() => setModal(false)} /> : null}
      <ul className="showcase">
        {
          props.products && props.products.map(product => (
            <ProductItem product={product} key={product.id} />
          ))
        }
      </ul>
    </React.Fragment>
  )
};

export default Showcase;
