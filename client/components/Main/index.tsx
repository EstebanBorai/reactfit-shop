import Filters from "components/Filters";
import Footer from "components/Footer";
import Showcase from "components/Showcase";
import productsJSON from "misc/products.json";
import * as React from "react";
import IFilters from "types/IFilters";

import "./main.scss";

const Main = () => {
  const [filters, setFilter] = React.useState({
    genres: [],
    sizes: [],
    maxPrice: 0,
    minPrice: 0
  });

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setProducts(productsJSON);
    const nextFilters: IFilters = {
      genres: [],
      sizes: [],
      maxPrice: 0,
      minPrice: 0
    };

    products.forEach((product, index) => {
      if (index === 0) {
        nextFilters.maxPrice = product.price;
        nextFilters.minPrice = product.price;
      } else {
        if (product.price > filters.maxPrice) {
          nextFilters.maxPrice = product.price;
        }

        if (product.price < nextFilters.minPrice) {
          nextFilters.minPrice = product.price;
        }
      }

      if (nextFilters.genres.indexOf(product.genre) === -1) {
        nextFilters.genres.push(product.genre);
      }

      product.sizes.forEach((size) => {
        if (nextFilters.sizes.indexOf(size) === -1) {
          nextFilters.sizes.push(size);
        }
      });
    });
  }, []);

  return (
    <div className="main-layout">
      <main className="app-main">
        <div className="container">
          <Filters setFilter={setFilter} filters={filters} />
          <Showcase products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
