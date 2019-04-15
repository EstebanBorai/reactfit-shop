import * as React from 'react';
import './filter-manager.scss';

const FilterManager = () => (
  <ol className="filter-manager">
    <ol className="filter-category">
      <li className="filter-category-title">Genres</li>
      <li className="selected-filter">F</li>
      <li className="selected-filter">M</li>
    </ol>
    <ol className="filter-category">
      <li className="filter-category-title">Sizes</li>
      <li className="selected-filter">XL</li>
      <li className="selected-filter">L</li>
      <li className="selected-filter">M</li>
      <li className="selected-filter">S</li>
      <li className="selected-filter">12</li>
      <li className="selected-filter">XS</li>
    </ol>
  </ol>
);

export default FilterManager;
