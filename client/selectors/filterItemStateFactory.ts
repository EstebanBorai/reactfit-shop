import { createSelector } from 'reselect';

const filterItemStateFactory = (originalState, originalOwnProps) => {
  const filterStateSelector = (state) => state.filters[originalOwnProps.filterKey];

  const isFilterActive = (selectedFilters) => {
    if (['genres', 'sizes'].includes(originalOwnProps.filterKey)) {
      return selectedFilters.indexOf(originalOwnProps.filterValue) !== -1;
    }
  };

  const isFilterActiveSelector = createSelector(
    filterStateSelector,
    (filters) => isFilterActive(filters)
  );

  return (state, ownProps) => {
    return {
      ...originalState,
      ...ownProps,
      isActive: isFilterActiveSelector(state)
    };
  };
};

export default filterItemStateFactory;
