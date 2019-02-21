import * as React from 'react';
import '../chat.styl';

interface ISearchProps {
  placeholder: string;
}

const Search = (props: ISearchProps) => (
  <form className="search-wrapper">
    <input type="text" placeholder={props.placeholder} />
  </form>
);

export default Search;
