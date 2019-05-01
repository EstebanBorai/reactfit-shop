import { ADD_FILTER } from 'actions/filters';
import { List as ImmutableList } from 'immutable';
import { IFilter } from 'types/index';

const initialValues = {
  genres: ImmutableList<string>(),
  maxPrice: 0,
  minPrice: 0,
  sizes: ImmutableList<string>()
};

const reducer = (filters: IFilter = initialValues, action) => {
  switch (action.type) {
    case ADD_FILTER:
      if (['genres', 'sizes'].includes(action.filter)) {
        return {
          ...filters,
          [action.filter]: filters[action.filter].push(action.value)
        };
      }

      if (['maxPrice', 'minPrice'].includes(action.filter)) {
        return {
          ...filters,
          [action.filter]: action.value
        };
      }
    default:
      return filters;
  }
};

export default reducer;
