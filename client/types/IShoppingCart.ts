import { Map as ImmutableMap } from 'immutable';
import IShoppingCartItem from './IShoppingCartItem';

interface IShoppingCart {
  items: ImmutableMap<string, IShoppingCartItem>;
  total: number;
}

export default IShoppingCart;
