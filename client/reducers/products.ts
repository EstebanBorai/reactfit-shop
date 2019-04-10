import { GET } from 'actions/products';
import { Map as ImmutableMap } from 'immutable';

const reducer = (products = null, action) => {
  switch (action.type) {
    case GET:
      products =  ImmutableMap(action.products);
      return products;
    default:
      return products;
  }
};

export default reducer;
