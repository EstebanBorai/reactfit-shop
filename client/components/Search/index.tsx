import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './search.scss';

const Search = () => (
  <form className="search">
    <input type="text" name="search" />
    <button type="submit">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
);

export default Search;
