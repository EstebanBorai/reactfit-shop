import { IFilterCategoryDispatchProps } from 'containers/Showcase/FilterManager/FilterCategory';
import * as React from 'react';
import { Props as IFilterItem } from './FilterItem';

interface IFilterCategory {
  title: string;
  filterKey: string;
  children: JSX.Element | JSX.Element[];
}

export interface IFilterItemCloneProps {
  filterKey?: string;
  onAddFilter?: Function;
  onRemoveFilter?: Function;
}

type Props = IFilterCategory & IFilterCategoryDispatchProps;

const FilterCategory = (props: Props) => {
  const withClickHandler = React.Children.map(props.children, (child: React.ReactElement<IFilterItem>) => (
    React.cloneElement<IFilterItemCloneProps>(child, {
      filterKey: props.filterKey,
      onAddFilter: () => props.onAddFilter(props.filterKey, child.props.filterValue),
      onRemoveFilter: () => props.onRemoveFilter(props.filterKey, child.props.filterValue)
    })
  ));

  return (
    <ol className="filter-category">
      <li className="filter-category-title">{props.title}</li>
      {withClickHandler}
    </ol>
  );
};

export default FilterCategory;
