import { combineReducers } from 'redux';
import cart from './cart';
import filters from './filters';
import products from './products';

export default combineReducers({ cart, filters, products });
