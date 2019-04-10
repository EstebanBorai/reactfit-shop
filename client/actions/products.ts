import { normalize, schema } from 'normalizr';

const normalizeProducts = (json) => {
  const productsSchema = new schema.Entity('products');
  const { entities } = normalize(json, [productsSchema]);
  return entities.products;
};

const PRODUCT = 'PRODUCT';
const BASE_URL = API_URL.concat('api/products');

export const REQUEST = `${PRODUCT}/REQUEST`;
export const FAIL = `${PRODUCT}/FAIL`;

export const GET = `${PRODUCT}/GET`;
export const getProducts = () => (dispatch) => {
  dispatch({ type: REQUEST });
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((json) => {
      dispatch({ type: GET, products: normalizeProducts(json) });
    })
   .catch((error) => {
      dispatch({ type: FAIL, error });
    });
};
