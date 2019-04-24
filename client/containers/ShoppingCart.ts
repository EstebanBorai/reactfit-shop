import { IShoppingCart as IShoppingCartStateProps } from 'types';
import ShoppingCart from 'components/ShoppingCart';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  items: state.cart.items,
  total: state.cart.total
});

export default connect<IShoppingCartStateProps, {}, {}>(mapStateToProps)(ShoppingCart);
