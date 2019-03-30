import * as React from 'react';
import './showcase.scss';
import ProductItem from './ProductItem';

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
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ul>
  )
};

export default Showcase;
