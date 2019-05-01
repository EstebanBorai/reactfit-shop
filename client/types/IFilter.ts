import { List as ImmutableList } from 'immutable';

interface IFilters {
  genres: ImmutableList<string>;
  maxPrice: number;
  minPrice: number;
  sizes: ImmutableList<string>;
}

export default IFilters;
