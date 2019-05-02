import { addFilter, removeFilter } from 'actions/filters';
import FilterCategory from 'components/Showcase/FilterManager/FilterCategory';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IFilter } from 'types/index';

export interface IFilterCategoryStateProps {
  filters: IFilter;
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

export interface IFilterCategoryDispatchProps {
  onAddFilter: Function;
  onRemoveFilter: Function;
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onAddFilter: addFilter,
  onRemoveFilter: removeFilter
}, dispatch);

export default connect<IFilterCategoryStateProps, IFilterCategoryDispatchProps, {}>
  (mapStateToProps, mapDispatchToProps)(FilterCategory);
