import Search from 'components/Search';
import FilterCategory from 'containers/Showcase/FilterManager/FilterCategory';
import FilterItem from 'containers/Showcase/FilterManager/FilterItem';
import * as React from 'react';
import './filter-manager.scss';

const FilterManager = () => (
  <ol className="filter-manager">
    <li>
      <Search />
    </li>
    <li>
      <FilterCategory title="Genres" filterKey="genres">
        <FilterItem title="F" filterValue="F" />
        <FilterItem title="M" filterValue="M" />
      </FilterCategory>
    </li>
    <li>
      <FilterCategory title="Sizes" filterKey="sizes">
        <FilterItem title="XL" filterValue="XL" />
        <FilterItem title="L" filterValue="L" />
        <FilterItem title="M" filterValue="M" />
        <FilterItem title="S" filterValue="S" />
        <FilterItem title="12" filterValue="12" />
        <FilterItem title="XS" filterValue="XS" />
      </FilterCategory>
    </li>
  </ol>
);

export default FilterManager;
