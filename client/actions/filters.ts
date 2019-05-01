const FILTER = 'FILTER';

export const ADD_FILTER = `${FILTER}/ADD_FILTER`;
export const addFilter = (filter, value) => ({ type: ADD_FILTER, filter, value });
