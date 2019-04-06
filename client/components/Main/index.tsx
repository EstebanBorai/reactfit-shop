import Filters from 'components/Filters';
import Footer from 'components/Footer';
import Spinner from 'components/lib/Spinner';
import Showcase from 'components/Showcase';
import { useAsyncEffect } from 'hooks/index';
import * as React from 'react';
import './main.scss';

const Main = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useAsyncEffect(() => {
    return new Promise((resolve, reject) => {
      return fetch('http://localhost:7070/api/products')
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoading(false);
          resolve();
         })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  return (
    <div className="main-layout">
      <main className="app-main">
      {
        loading ?
        <Spinner /> :
        <div className="container">
          <Filters />
          <Showcase products={products} />
        </div>
      }
      </main>
      <Footer />
    </div>
  );
};

export default Main;
