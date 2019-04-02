import * as React from 'react';
import './filters.scss';
import Filter from './Filter';
import products from 'misc/products.json';

let filters = {
  genres: [],
  sizes: [],
  maxPrice: 0,
  minPrice: 0
};

products.forEach((product, index) => {
  if (index === 0) {
    filters.maxPrice = product.price;
    filters.minPrice = product.price;
  } else {
    if (product.price > filters.maxPrice) {
      filters.maxPrice = product.price;
    }

    if (product.price < filters.minPrice) {
      filters.minPrice = product.price;
    }
  }

  if (filters.genres.indexOf(product.genre) === -1) {
    filters.genres.push(product.genre);
  }

  product.sizes.forEach(size => {
    if (filters.sizes.indexOf(size) === -1) {
      filters.sizes.push(size);
    }
  });
});

const Filters = () => {
  return (
    <aside className="filters">
      <article className="filter-category">
        <h3>Your Selection</h3>
        <ul className="collection">
          <li>Selected Filters Go here</li>
        </ul>
      </article>
      <article className="filter-category">
        <h3>Genre</h3>
        <ul className="collection">
          {
            filters.genres.map((genre, index) => (
              <Filter key={index} filter={genre} isSelected />
            ))
          }
        </ul>
      </article>
      <article className="filter-category">
        <h3>Sizes</h3>
        <ul className="collection">
          {
            filters.sizes.map((size, index) => (
              <Filter key={index} filter={size} isSelected />
            ))
          }
        </ul>
      </article>
      <article className="filter-category">
        <h3>Price</h3>
        <div>
          maxPrice: {filters.maxPrice}&nbsp;$<br/>
          minPrice: {filters.minPrice}&nbsp;$<br/>
        </div>
      </article>
    </aside>
  )
};

export default Filters;
