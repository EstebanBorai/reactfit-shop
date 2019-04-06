import * as React from 'react';

import Filter from './Filter';
import './filters.scss';

const Filters = () => {
  return (
    <aside className="filters">
      <article className="filter-category">
        <h3>Genre</h3>
        <ul className="collection">
          <Filter filter="F" isSelected={false} />
          <Filter filter="M" isSelected={false} />
        </ul>
      </article>
      <article className="filter-category">
        <h3>Sizes</h3>
        <ul className="collection">
          <Filter filter="XL" isSelected={false} />
          <Filter filter="L" isSelected={false} />
          <Filter filter="M" isSelected={false} />
          <Filter filter="S" isSelected={false} />
          <Filter filter="12" isSelected={false} />
          <Filter filter="XS" isSelected={false} />
        </ul>
      </article>
    </aside>
  );
};

export default Filters;
