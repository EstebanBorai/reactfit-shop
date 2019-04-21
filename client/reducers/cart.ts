import { ADD_ITEM, REMOVE_ITEM, REMOVE_MANY } from 'actions/cart';
import { Map as ImmutableMap } from 'immutable';

const reducer = (cart = ImmutableMap<number, { quantity: number }>(), action) => {
  switch (action.type) {
    case ADD_ITEM:
      const itemId = action.item.id;
      const item = cart.get(itemId);

      if (item) {
        cart = cart.set(itemId, {
          quantity: item.quantity + 1
        });
      } else {
        cart = cart.set(itemId, {
          quantity: 1
        });
      }

    default:
      return cart;
  }
};

export default reducer;
