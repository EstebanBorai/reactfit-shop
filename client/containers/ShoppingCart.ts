import ShoppingCart from 'components/ShoppingCart';
import { connect } from 'react-redux';

export interface IShoppingCartStateProps {
  items;
}

const mapStateToProps = (state) => ({
  items: state.cart
});

export default connect<IShoppingCartStateProps, {}, {}>(mapStateToProps)(ShoppingCart);
