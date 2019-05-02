import { IFilterItemStateProps } from 'containers/Showcase/FilterManager/FilterItem';
import * as React from 'react';
import { IFilterItemCloneProps } from './FilterCategory';

interface IFilterItem {
  title: string;
  filterValue: string;
}

export type Props = IFilterItem & IFilterItemStateProps & IFilterItemCloneProps;

const FilterItem = (props: Props) => {
  const handleClick = () => {
    if (props.isActive) {
      props.onRemoveFilter();
    } else {
      props.onAddFilter();
    }
  };

  return (
    <li className={props.isActive ? 'selected-filter active' : 'selected-filter'} onClick={handleClick}>
      {props.title}
    </li>
  );
};

FilterItem.defaultProps = {
  isActive: false,
  onClick: null
};

export default FilterItem;
