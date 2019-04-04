import Filters from "components/Filters";
import Footer from "components/Footer";
import Showcase from "components/Showcase";
import { useAsyncEffect } from 'hooks/index';
import * as React from "react";
import getFilters from './filters';
import "./main.scss";

const Main = () => {
  const [filters, setFilter] = React.useState({
    genres: [],
    sizes: [],
    maxPrice: 0,
    minPrice: 0
  });

  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useAsyncEffect(() => {
    const products = new Promise((resolve, reject) => {
      return fetch('http://localhost:7070/api/products')
        .then(res => res.json())
        .then(json => {
          setProducts(json);
          getFilters(json).then(filters => {
            setFilter(filters);
            resolve();
          });
         })
        .catch(err => {
          reject(err);
        });
    });

    return Promise.all([ products ]).then(res => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="main-layout">
      <main className="app-main">
      {
        loading ?
        <h1>Change this to suspense please.</h1> :
        <div className="container">
          <Filters setFilter={setFilter} filters={filters} />
          <Showcase products={products} />
        </div> 
      }
      </main>
      <Footer />
    </div>
  );
};

export default Main;
