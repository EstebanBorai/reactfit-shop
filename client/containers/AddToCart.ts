import { addItem } from 'actions/cart';
import AddToCart from 'components/AddToCart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export interface IAddToCartDispatchProps {
  onAddToCart: Function;
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onAddToCart: addItem
}, dispatch);

export default connect<{}, IAddToCartDispatchProps, {}>(null, mapDispatchToProps)(AddToCart);
