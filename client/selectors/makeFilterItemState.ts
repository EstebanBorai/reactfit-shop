import { createSelector } from 'reselect';

const makeFilterItemState = (originalState, originalOwnProps) => {
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
      isActive: isFilterActiveSelector(state)
    };
  };
};

export default makeFilterItemState;
