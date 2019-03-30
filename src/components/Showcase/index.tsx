import * as React from 'react';
import './showcase.scss';
import ProductItem from './ProductItem';
import productsJSON from 'misc/products.json';

const Showcase = () => {
  const [userIdentity, setIdentity] = React.useState(null);
  const [isModalOpen, setModal] = React.useState(false);

  React.useEffect(() => {
    const userStats = localStorage.getItem('reactfit-user');

    if (userStats) {
      setIdentity(userStats);
    } else {
      setModal(true);
    }
  }, []);

  return (
    <ul className="showcase">
      {
        productsJSON && productsJSON.map(product => (
          <ProductItem product={product} key={product.id} />
        ))
      }
    </ul>
  )
};

export default Showcase;
