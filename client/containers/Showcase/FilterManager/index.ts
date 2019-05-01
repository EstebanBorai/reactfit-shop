import { addFilter } from 'actions/filters';
import FilterManager from 'components/Showcase/FilterManager';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IFilter } from 'types/index';

export interface IFilterManagerStateProps {
  filters: IFilter;
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

export interface IFilterManagerDispatchProps {
  addFilter: Function;
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addFilter
}, dispatch);

export default connect<IFilterManagerStateProps, IFilterManagerDispatchProps, {}>
  (mapStateToProps, mapDispatchToProps)(FilterManager);
