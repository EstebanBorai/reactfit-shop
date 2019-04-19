import { IProduct } from '@types';
import { getProducts } from 'actions/products';
import Showcase from 'components/Showcase';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export interface IShowcaseStateProps {
  products: Map<string, IProduct>;
}

const mapStateToProps = (state) => ({
  products: state.products
});

export interface IShowcaseDispatchProps {
  getProducts: Function;
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProducts
}, dispatch);

export default connect<IShowcaseStateProps, IShowcaseDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Showcase);
