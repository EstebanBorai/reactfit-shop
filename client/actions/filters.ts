const FILTER = 'FILTER';

export const ADD_FILTER = `${FILTER}/ADD_FILTER`;
export const addFilter = (filter, value) => ({ type: ADD_FILTER, filter, value });

export const REMOVE_FILTER = `${FILTER}/REMOVE_FILTER`;
export const removeFilter = (filter, value) => ({ type: REMOVE_FILTER, filter, value });
