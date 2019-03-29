import * as React from 'react';
import './filters.scss';

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
          <li>clothers categories for this genre</li>
        </ul>
      </article>
      <article className="filter-category">
        <h3>Sizes</h3>
        <ul className="collection">
          <li>checkboxes for sizes</li>
        </ul>
      </article>
      <article className="filter-category">
        <h3>Price</h3>
        <div>
          Slider for price
        </div>
      </article>
    </aside>
  )
};

export default Filters;
