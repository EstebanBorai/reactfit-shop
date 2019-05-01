import * as React from 'react';

interface IFilterItem {
  title: string;
  filterValue: string;
  onClick?: any;
  isActive?: boolean;
}

const FilterItem = (props: IFilterItem) => (
  <li className={props.isActive ? 'selected-filter active' : 'selected-filter'} onClick={props.onClick}>
    {props.title}
  </li>
);

FilterItem.defaultProps = {
  isActive: false,
  onClick: null
};

export default FilterItem;
