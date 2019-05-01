import FilterItem from 'components/Showcase/FilterManager/FilterItem';
import { connect } from 'react-redux';
import filterItemStateFactory from 'selectors/filterItemStateFactory';

export interface IFilterItemStateProps {
  isActive: boolean;
}

const mapStateToProps = (state, ownProps) => filterItemStateFactory(state, ownProps);

export default connect<IFilterItemStateProps, {}, {}>
  (mapStateToProps)(FilterItem);
