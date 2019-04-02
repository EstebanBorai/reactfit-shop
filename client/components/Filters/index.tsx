import products from "misc/products.json";
import * as React from "react";
import IFilters from "types/IFilters";

import Filter from "./Filter";
import "./filters.scss";

interface IFiltersProps {
  filters: IFilters;
  setFilter: Function;
}

const Filters = (props: IFiltersProps) => {
  return (
    <aside className="filters">
      <article className="filter-category">
        <h3>Genre</h3>
        <ul className="collection">
          {
            props.filters.genres && props.filters.genres.length > 0 ?
            props.filters.genres.map((genre, index) => (
              <Filter key={index} filter={genre} isSelected={true} />
            )) : <em>Sorry theres no genres in this search</em>
          }
        </ul>
      </article>
      <article className="filter-category">
        <h3>Sizes</h3>
        <ul className="collection">
          {
            props.filters.sizes && props.filters.sizes.length > 0 ?
            props.filters.sizes.map((size, index) => (
              <Filter key={index} filter={size} isSelected={true} />
            )) : <em>Sorry theres no sizes in this search</em>
          }
        </ul>
      </article>
      <article className="filter-category">
        <h3>Price</h3>
        <div>
          maxPrice: {props.filters.maxPrice}&nbsp;$<br/>
          minPrice: {props.filters.minPrice}&nbsp;$<br/>
        </div>
      </article>
    </aside>
  );
};

export default Filters;
