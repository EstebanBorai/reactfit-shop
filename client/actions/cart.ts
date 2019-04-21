const CART = 'CART';

export const ADD_ITEM = `${CART}/ADD_ITEM`;
export const addItem = (item) => ({ type: ADD_ITEM, item });

export const REMOVE_ITEM = `${CART}/REMOVE_ITEM`;
export const removeItem = (id) => ({ type: REMOVE_ITEM, id });

export const REMOVE_MANY = `${CART}/REMOVE_MANY`;
export const removeMany = (id, quantity) => ({ type: REMOVE_MANY, id, quantity });
