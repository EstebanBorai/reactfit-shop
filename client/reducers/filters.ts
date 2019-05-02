import { ADD_FILTER, REMOVE_FILTER } from 'actions/filters';
import { List as ImmutableList } from 'immutable';
import { IFilter } from 'types/index';

const initialValues = {
  genres: ImmutableList<string>(),
  maxPrice: null,
  minPrice: null,
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

    case REMOVE_FILTER:
      if (['genres', 'sizes'].includes(action.filter)) {
        const filterIndex = filters[action.filter].indexOf(action.value);
        const nextList = filters[action.filter].delete(filterIndex);
        return {
          ...filters,
          [action.filter]: nextList
        };
      }

      if (['maxPrice', 'minPrice'].includes(action.filter)) {
        return {
          ...filters,
          [action.filter]: null
        };
      }
    default:
      return filters;
  }
};

export default reducer;
