import * as React from 'react';

import './filter.scss';

const Filter = () => (
  <form className="filter">
    <input type="text" name="filter" />
    <button type="submit">Search</button>
  </form>
);

export default Filter;
