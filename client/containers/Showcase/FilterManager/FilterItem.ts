import FilterItem from 'components/Showcase/FilterManager/FilterItem';
import { connect } from 'react-redux';
import makeFilterItemState from 'selectors/makeFilterItemState';

export interface IFilterItemStateProps {
  isActive: boolean;
}

const mapStateToProps = (state, ownProps) => makeFilterItemState(state, ownProps);

export default connect<IFilterItemStateProps, {}, {}>
  (mapStateToProps)(FilterItem);
