import * as React from 'react';

interface IFilterCategory {
  title: string;
  filterKey: string;
  onClick: Function;
  children: JSX.Element | JSX.Element[];
}

const FilterCategory = (props: IFilterCategory) => {
  const withClickHandler = React.Children.map(props.children, (child) => (
    React.cloneElement(child, {
      filterKey: props.filterKey,
      onClick: () => props.onClick(props.filterKey, child.props.filterValue)
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
