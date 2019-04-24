import { ADD_ITEM, REMOVE_ITEM, REMOVE_MANY } from 'actions/cart';
import { Map as ImmutableMap } from 'immutable';
import { IShoppingCart, IShoppingCartItem } from 'types/index';

const initialValues = {
  items: ImmutableMap<string, IShoppingCartItem>(),
  total: 0
};

const reducer = (cart: IShoppingCart = initialValues, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const itemId = action.item.id;
      const cartItem = cart.items.get(itemId);

      const next = {
        ...cart,
        items: cart.items.set(itemId, {
          price: action.item.price,
          productId: itemId,
          quantity: cartItem ? cartItem.quantity + 1 : 1
        }),

        total: cart.total + action.item.price
      };

      return next;
    default:
      return cart;
  }
};

export default reducer;
